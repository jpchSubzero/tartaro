using JetBrains.Annotations;
using Volo.Abp.MongoDB;

namespace Eva.Demo.MongoDB
{
    public class DemoMongoModelBuilderConfigurationOptions : AbpMongoModelBuilderConfigurationOptions
    {
        public DemoMongoModelBuilderConfigurationOptions(
            [NotNull] string collectionPrefix = "")
            : base(collectionPrefix)
        {
        }
    }
}