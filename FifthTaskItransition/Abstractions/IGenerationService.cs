using FifthTaskItransition.Models;

namespace FifthTaskItransition.Abstractions
{
    public interface IGenerationService
    {
        Task<List<Person>> GenerateAsync(int count, string lang, int seed);
    }
}
