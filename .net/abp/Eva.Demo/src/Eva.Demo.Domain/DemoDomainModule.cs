using Volo.Abp.Domain;
using Volo.Abp.Modularity;

namespace Eva.Demo
{
    [DependsOn(
        typeof(AbpDddDomainModule),
        typeof(DemoDomainSharedModule)
    )]
    public class DemoDomainModule : AbpModule
    {

    }
}
