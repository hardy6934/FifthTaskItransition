using FifthTaskItransition.Abstractions;
using FifthTaskItransition.Models;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace FifthTaskItransition.Controllers
{
    public class HomeController : Controller
    { 

        private readonly IGenerationService generationService;
        private readonly IMakingErrorsService makingErrorsService;

        public HomeController(IGenerationService generationService, IMakingErrorsService makingErrorsService)
        { 
            this.generationService = generationService;
            this.makingErrorsService= makingErrorsService;
        } 

        public IActionResult Index(string locale = "ru")
        {
            if (locale == "ru" || locale == "az" || locale == "en" )
            {
                HttpContext.Response.Cookies.Append("locale", locale);
                 
                return View();
            }
            return NotFound();
        }



        [HttpGet]
        public async Task<IActionResult> PersonPreviewAsync(int count, int seed, int page, int pageSize, double errors = 0)
        {  
            var persons = await generationService.GenerateAsync(count, HttpContext.Request.Cookies["locale"], seed+page); 
            var result = persons.Skip((page - 1) * pageSize).Take(pageSize).ToList();

            if (errors != 0)
            {
               await makingErrorsService.MakeErrorsAsync(result, errors );
            }

            return View(result);
        }
         
         


        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}