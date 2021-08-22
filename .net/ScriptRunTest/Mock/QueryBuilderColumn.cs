using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Text;

namespace ScriptRunTest.Mock
{
    public class QueryBuilderColumn
    {
        public QueryBuilderColumn() { }

        [DefaultValue(null)]
        [JsonProperty("category")]
        public string Category { get; set; }
        [DefaultValue(null)]
        [JsonProperty("columns")]
        public object Columns { get; set; }
        [DefaultValue(null)]
        [JsonProperty("field")]
        public string Field { get; set; }
        [DefaultValue(null)]
        [JsonProperty("format")]
        public string Format { get; set; }
        [DefaultValue(null)]
        [JsonProperty("label")]
        public string Label { get; set; }
        [DefaultValue(null)]
        [JsonProperty("operators")]
        public object Operators { get; set; }
        [DefaultValue(null)]
        [JsonProperty("ruleTemplate")]
        public string RuleTemplate { get; set; }
        [DefaultValue(double.NaN)]
        [JsonProperty("step")]
        public double Step { get; set; }
        [DefaultValue(null)]
        [JsonProperty("template")]
        public object Template { get; set; }
        [DefaultValue(null)]
        [JsonProperty("type")]
        public string Type { get; set; }
        [DefaultValue(null)]
        [JsonProperty("validation")]
        public object Validation { get; set; }
        [DefaultValue(null)]
        [JsonProperty("value")]
        public object Value { get; set; }
        [DefaultValue(null)]
        [JsonProperty("values")]
        public object Values { get; set; }
    }
}
