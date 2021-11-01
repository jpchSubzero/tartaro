using AngularRoutes.Localization;
using Volo.Abp.AspNetCore.Mvc;

namespace AngularRoutes.Controllers
{
    /* Inherit your controllers from this class.
     */
    public abstract class AngularRoutesController : AbpController
    {
        protected AngularRoutesController()
        {
            LocalizationResource = typeof(AngularRoutesResource);
        }
    }
}