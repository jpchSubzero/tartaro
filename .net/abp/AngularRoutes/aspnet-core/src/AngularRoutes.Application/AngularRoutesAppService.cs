using System;
using System.Collections.Generic;
using System.Text;
using AngularRoutes.Localization;
using Volo.Abp.Application.Services;

namespace AngularRoutes
{
    /* Inherit your application services from this class.
     */
    public abstract class AngularRoutesAppService : ApplicationService
    {
        protected AngularRoutesAppService()
        {
            LocalizationResource = typeof(AngularRoutesResource);
        }
    }
}
