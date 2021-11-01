using Volo.Abp.Modularity;

namespace AngularRoutes
{
    [DependsOn(
        typeof(AngularRoutesApplicationModule),
        typeof(AngularRoutesDomainTestModule)
        )]
    public class AngularRoutesApplicationTestModule : AbpModule
    {

    }
}