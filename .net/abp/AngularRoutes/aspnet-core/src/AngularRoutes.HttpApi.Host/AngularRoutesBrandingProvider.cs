using Volo.Abp.DependencyInjection;
using Volo.Abp.Ui.Branding;

namespace AngularRoutes
{
    [Dependency(ReplaceServices = true)]
    public class AngularRoutesBrandingProvider : DefaultBrandingProvider
    {
        public override string AppName => "AngularRoutes";
    }
}
