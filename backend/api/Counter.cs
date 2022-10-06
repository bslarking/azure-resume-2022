using Newtonsoft.Json;

//Ensure the namespace is the same as the function that we're using
namespace Company.Function
{
    public class Counter
    {
        //These properties relate to the properties found in CosmosDB, ensuring they match up.
        [JsonProperty(PropertyName="id")]


        public string Id {get; set;}

        [JsonProperty(PropertyName="count")]
        
        //Actual value of the counter called 'Count'
        public int Count {get; set;}
    }
}