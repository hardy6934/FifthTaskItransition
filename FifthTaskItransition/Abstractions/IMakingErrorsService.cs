

using FifthTaskItransition.Models;

namespace FifthTaskItransition.Abstractions
{
    public interface IMakingErrorsService
    {
        public Task<List<Person>> MakeErrorsAsync(List<Person> people, double errorCount);
    }
}
