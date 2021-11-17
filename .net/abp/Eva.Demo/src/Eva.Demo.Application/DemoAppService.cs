using Eva.Demo.Localization;
using Volo.Abp.Application.Services;

namespace Eva.Demo
{
    public abstract class DemoAppService : ApplicationService
    {
        protected DemoAppService()
        {
            LocalizationResource = typeof(DemoResource);
            ObjectMapperContext = typeof(DemoApplicationModule);
        }
    }
}
