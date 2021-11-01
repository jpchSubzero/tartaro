using AngularRoutes.EntityFrameworkCore;
using Volo.Abp.Autofac;
using Volo.Abp.BackgroundJobs;
using Volo.Abp.Modularity;

namespace AngularRoutes.DbMigrator
{
    [DependsOn(
        typeof(AbpAutofacModule),
        typeof(AngularRoutesEntityFrameworkCoreModule),
        typeof(AngularRoutesApplicationContractsModule)
        )]
    public class AngularRoutesDbMigratorModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            Configure<AbpBackgroundJobOptions>(options => options.IsJobExecutionEnabled = false);
        }
    }
}
