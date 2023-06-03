using FifthTaskItransition.Abstractions;
using FifthTaskItransition.Models;

namespace FifthTaskItransition.Services
{
    public class MakingErrorsService : IMakingErrorsService
    {
        
        public async Task<List<Person>> MakeErrorsAsync(List<Person> people, double errorCount)
        {
           return await Task.Run(() => MakingErrorsMethod(people, errorCount));
        }

        private List<Person> MakingErrorsMethod(List<Person> people, double errorCount)
        {  
            foreach (var person in people)
            {
                person.FullName = errors(person.FullName, errorCount);
                person.Adress = errors(person.Adress, errorCount); 
                person.Phone = errors(person.Phone, errorCount);
            }

            return people;
        }

        private readonly Random rnd = new Random(); 
        
        private string errors(string str, double count)
        {

            if (count < 0)
            {
                return str;
            }
            if (count == 0.5)
            {
                if (rnd.Next(0, 10) >= 5)
                    str = Replacing(str, rnd.Next(0, str.Length), rnd.Next(0, str.Length));
            }
            else
            {
                str = Replacing(str, rnd.Next(0, str.Length), rnd.Next(0, str.Length));

            }  
            return errors(str, count - 1);
        }

        private string Replacing(string str, int first, int second)
        {
            if (str.Length > 1)
            {
                char[] letters = str.ToCharArray();
                char temp = letters[first];
                letters[first] = letters[second];
                letters[second] = temp;
                return str = new string(letters);
            }
            return str;
        }
    }
}
