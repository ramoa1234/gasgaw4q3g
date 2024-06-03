using System;
using System.Net;
using System.IO;
using System.Text;



class Http
{
    static void Main(string[] args)
    {
        string indexPage = "C:/Users/anton/Desktop/ai/html/index.html";
        string indexContent = File.ReadAllText(indexPage);
        Console.WriteLine(indexContent);

        HttpListener listener = new HttpListener();
        listener.Prefixes.Add("http://localhost:3000/");

        listener.Start();
        Console.WriteLine("Server, Started");
        while(true)
        {
            HttpListenerContext context = listener.GetContext();
            HttpListenerResponse response = context.Response;
            HttpListenerRequest request = context.Request;

            response.ContentType = "text/html";
            //input stream(take in user inputs)
            StreamReader Request = new StreamReader(request.InputStream);
            //string userInput = Request.Form("textbox");
                //make class to read text content

            //output stream(pass the information to the user)
            Stream output = response.OutputStream;
            byte[] buffer = Encoding.UTF8.GetBytes(indexContent);
            output.Write(buffer, 0, buffer.Length);

            
            response.Close();

        }

    }
}
