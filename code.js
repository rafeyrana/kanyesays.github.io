
$(document).ready(()=>{ 
    
            $.get("https://api.kanye.rest/text",function(response)
            {
                console.log(response)
                let final=response.toUpperCase();
                $("#msg").text(final)
                document.getElementById("twitter").innerHTML=`<a class="twitter-share-button"
                            href="https://twitter.com/intent/tweet?text=${"KANYE SAYS: " + final}"
                            data-size="large" target="_blank" >
                        Let The World Know    <i class="fa-brands fa-twitter" style="color: #241109"></i></a>`
                
            })






}


)