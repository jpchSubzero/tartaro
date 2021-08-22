using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Text;

namespace ScriptRunTest.Mock
{
    public class QueryBuilderRule
    {
        [DefaultValue(null)]
        [JsonProperty("condition")]
        public string Condition { get; set; }
        [DefaultValue(null)]
        [JsonProperty("field")]
        public string Field { get; set; }
        [DefaultValue(null)]
        [JsonProperty("label")]
        public string Label { get; set; }
        [DefaultValue(false)]
        [JsonProperty("not")]
        public bool Not { get; set; }
        [DefaultValue(null)]
        [JsonProperty("operator")]
        public string Operator { get; set; }
        [DefaultValue(null)]
        [JsonProperty("rules")]
        public object Rules { get; set; }
        [DefaultValue(null)]
        [JsonProperty("type")]
        public string Type { get; set; }
        [DefaultValue(null)]
        [JsonProperty("value")]
        public object Value { get; set; }
    }

}
