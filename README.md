# Jonathan's Azure-resume project
My azure resume, following [ACG project video](https://www.youtube.com/watch?v=ieYrBWmkfno)

### Front-end resources
The front-end is a static site with HTML, CSS, and JavaScript. It's static and has a visitor counter. The visitor counter data fetched via an API call to an Azure Function.

### Back-end resources
The back-end is an [HTTP triggered](https://learn.microsoft.com/en-us/azure/azure-functions/functions-bindings-http-webhook-trigger?tabs=in-process%2Cfunctionsv2&pivots=programming-language-csharp) Azure Functions with Cosmos DB input and output binding. The Function is triggered, it retrieves the CosmosDB item, add +1 to it, and saves it and returns its value to the caller.

### CI/CD resources
The workflows folder contains front-end and back-end YAML files for deploying the content using GitHub actions.