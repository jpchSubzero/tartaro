using System.Threading.Tasks;
using Volo.Abp.Application.Services;

namespace Eva.Demo.Samples
{
    public interface ISampleAppService : IApplicationService
    {
        Task<SampleDto> GetAsync();

        Task<SampleDto> GetAuthorizedAsync();
    }
}
