using Bogus;
using FifthTaskItransition.Abstractions;
using FifthTaskItransition.Models;
using Microsoft.AspNetCore.SignalR;
using System.Globalization;

namespace FifthTaskItransition.Services
{
    public class GenerationService : IGenerationService
    {
        
        public async Task<List<Models.Person>> GenerateAsync(int count, string lang, int seed)
        { 
            return await Task.Run(() => Generate(count, lang, seed));
        }

         
        private List<Models.Person> Generate(int count, string lang, int seed)
        {
            Randomizer.Seed = new Random(seed);
            var list = new List<Models.Person>(); 
                var testUsers = new Faker<Models.Person>(locale: lang) 
                    //Basic rules using built-in generators 
                    .RuleFor(u => u.FullName, f => f.Name.FullName())
                    .RuleFor(u => u.Number, f=>f.IndexFaker)
                    .RuleFor(u => u.RandomId, f => Guid.NewGuid().ToString().Replace("-",""))
                    .RuleFor(u => u.Adress, f => f.Address.FullAddress())
                    .RuleFor(u => u.Phone, f => f.Phone.PhoneNumber()); 

            for (int i = 0; i < count; i++)
            {
                list.Add(testUsers.Generate());
            }

            return list; 
        }
    }
}
