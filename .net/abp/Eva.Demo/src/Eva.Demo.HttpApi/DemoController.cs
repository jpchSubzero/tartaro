using Eva.Demo.Localization;
using Volo.Abp.AspNetCore.Mvc;

namespace Eva.Demo
{
    public abstract class DemoController : AbpController
    {
        protected DemoController()
        {
            LocalizationResource = typeof(DemoResource);
        }
    }
}
