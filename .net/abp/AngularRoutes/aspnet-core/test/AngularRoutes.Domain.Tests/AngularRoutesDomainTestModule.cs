using AngularRoutes.EntityFrameworkCore;
using Volo.Abp.Modularity;

namespace AngularRoutes
{
    [DependsOn(
        typeof(AngularRoutesEntityFrameworkCoreTestModule)
        )]
    public class AngularRoutesDomainTestModule : AbpModule
    {

    }
}