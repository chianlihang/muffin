<script lang="ts">
    let x = "1.jpg";

    let offermuffin:string = "";
    let acceptmuffin:string = "";

    let submitStatus: string;
    const sendAnswer = async(data) => {
        submitStatus = "submitting"
        const response = await fetch(
            "/api/answers",
            {
                method: "POST",
                body: JSON.stringify({ offermuffin, acceptmuffin }),
            }
        );
        
        const {message}:any = await response.json();
        submitStatus = message;
    };

    function onKeyDown(e) {
        if (x == "1.jpg") { //title screen
            switch(e.keyCode) {
                case 13: // enter key
                    x = "2.gif"
                    break;
                case 82: // enter key
                    x = "end.jpg"
                    break;
            }
        } else if (x == "2.gif") { //welcome to buildspace
            switch(e.keyCode) {
                case 13: // enter key
                    x = "3.gif"
                    break;
            }
        } else if (x == "3.gif") { //you must be starving
            switch(e.keyCode) {
                case 13: // enter key
                    x = "4.gif"
                    break;
            }
        } else if (x == "4.gif") { //im kinda hungry
            switch(e.keyCode) {
                case 38: // up arrow
                    x = "5.gif"
                    break;
                case 37: // left arrow
                    x = "5.gif"
                    break;
                case 39: // right arrow to why the hell did you want to see this you sick fuck
                    x = "50.jpg"
                    break;
            }
        } else if (x == "5.gif") { //theres muffins in the cafeteria
            switch(e.keyCode) {
                case 13: // enter key
                    x = "6.jpg"
                    break;
            }
        } else if (x == "6.jpg") { //go to cafeteria?
            switch(e.keyCode) {
                case 37: // left arrow
                    x = "7.jpg"
                    break;
                case 39: // right arrow how many hint do i need to drop?
                    x = "70.gif"
                    break;
            }
        } else if (x == "7.jpg") { //it was a cozy lively room
            switch(e.keyCode) {
                case 13: // enter key
                    x = "8.jpg"
                    break;
            }
        } else if (x == "8.jpg") { //press enter to talk to fella
            switch(e.keyCode) {
                case 13: // enter key
                    x = "9.jpg"
                    break;
            }
        } else if (x == "9.jpg") { //chianlis perspective man im hungry
            switch(e.keyCode) {
                case 13: // enter key
                    x = "10.jpg"
                    break;
            }
        } else if (x == "10.jpg") { //these muffins look kinda mid tho
            switch(e.keyCode) {
                case 13: // enter key
                    x = "11.jpg"
                    break;
            }
        } else if (x == "11.jpg") { //i wish the muffins were a lil smaller
            switch(e.keyCode) {
                case 13: // enter key
                    x = "12.jpg"
                    break;
            }
        } else if (x == "12.jpg") { //welp guess ill just take one
            switch(e.keyCode) {
                case 13: // enter key
                    x = "13.gif"
                    break;
            }
        } else if (x == "13.gif") { //... holding muffin
            switch(e.keyCode) {
                case 13: // enter key
                    x = "14.jpg"
                    break;
            }
        } else if (x == "14.jpg") { //whatd u think of the muffin
            switch(e.keyCode) {
                case 13: // enter key
                    x = "15.jpg"
                    break;
            }
        } else if (x == "15.jpg") { //damn i didnt even get to try it yet
            switch(e.keyCode) {
                case 13: // enter key
                    x = "16.jpg"
                    break;
            }
        } else if (x == "16.jpg") { //whys her face red
            switch(e.keyCode) {
                case 13: // enter key
                    x = "17.jpg"
                    break;
            }
            //DILEMMA PART 1
            //DILEMMA PART 1
            //DILEMMA PART 1
            //DILEMMA PART 1
            //DILEMMA PART 1
            //DILEMMA PART 1
        } else if (x == "17.jpg") { //answer how the muffin is
            switch(e.keyCode) {
                case 38: // up arrow i havent tried it yet 
                    x = "80.jpg";
                    offermuffin = "no";
                    sendAnswer(offermuffin);
                    break;
                case 39: // right arrow offer a piece
                    x = "18.jpg";
                    offermuffin = "yes";
                    sendAnswer(offermuffin);
                    break;
                case 40: // down arrow it was alright
                    x = "80.jpg";
                    offermuffin = "no";
                    sendAnswer(offermuffin);
                    break;
            }
        } else if (x == "18.jpg") { //weilins perspective how was the muffin?
            switch(e.keyCode) {
                case 13: // enter key
                    x = "19.jpg"
                    break;
            }
        } else if (x == "19.jpg") { //i dunno wanna try a piece?
            switch(e.keyCode) {
                case 13: // enter key
                    x = "20.jpg"
                    break;
            }
        } else if (x == "20.jpg") { //THIS IS THE MUFFIN DILEMMA
            switch(e.keyCode) {
                case 13: // enter key
                    x = "21.gif"
                    break;
            }
        } else if (x == "21.gif") { //pick ur answer
            switch(e.keyCode) {
                case 38: // up arrow yea sure
                    x = "end.jpg";
                    acceptmuffin = "yes";
                    sendAnswer(acceptmuffin);
                    break;
                case 39: // right arrow yea sure
                    x = "end.jpg";
                    acceptmuffin = "yes";
                    sendAnswer(acceptmuffin);
                    break;
                case 40: // down arrow no thanks
                    x = "end.jpg";
                    acceptmuffin = "no";
                    sendAnswer(acceptmuffin);
                    break;
                case 37: // left arrow no thanks
                    x = "end.jpg";
                    acceptmuffin = "no";
                    sendAnswer(acceptmuffin);
                    break;
            } 
        //END OF STANDARD STORYLINE
        //END OF STANDARD STORYLINE
        //END OF STANDARD STORYLINE
        //END OF STANDARD STORYLINE
        //END OF STANDARD STORYLINE
        //END OF STANDARD STORYLINE
        } else if (x == "50.jpg") { //whyd u wanna see this milking
            switch(e.keyCode) {
                case 13: // enter key
                    x = "51.jpg"
                    break;
            }
        } else if (x == "51.jpg") { //has god abandoned you
            switch(e.keyCode) {
                case 13: // enter key
                    x = "52.jpg"
                    break;
            }
        } else if (x == "52.jpg") { //do you enjoy this type of thing
            switch(e.keyCode) {
                case 13: // enter key
                    x = "53.jpg"
                    break;
            }
        } else if (x == "53.jpg") { //take a good look at this
            switch(e.keyCode) {
                case 13: // enter key
                    x = "54.jpg"
                    break;
            }
        } else if (x == "54.jpg") { //just the drawing
            switch(e.keyCode) {
                case 13: // enter key
                    x = "55.jpg"
                    break;
            }
        } else if (x == "55.jpg") { //take a good look at yourself
            switch(e.keyCode) {
                case 13: // enter key
                    x = "56.jpg"
                    break;
            }
        } else if (x == "56.jpg") { //black screen
            switch(e.keyCode) {
                case 13: // enter key
                    x = "57.gif"
                    break;
            }
        } else if (x == "57.gif") { //muffin or milk again
            switch(e.keyCode) {
                case 38: // up arrow
                    x = "5.gif"
                    break;
                case 37: // left arrow
                    x = "5.gif"
                    break;
                case 39: // right arrow to why the hell did you want to see this you sick fuck AGAIN
                    x = "58.jpg"
                    break;
            }
        } else if (x == "58.jpg") { //back again?
            switch(e.keyCode) {
                case 13: // enter key
                    x = "59.jpg"
                    break;
            }
        } else if (x == "59.jpg") { //you truly are a sexual deviant
            switch(e.keyCode) {
                case 13: // enter key
                    x = "60.jpg"
                    break;
            }
        } else if (x == "60.jpg") { //im blocking the image
            switch(e.keyCode) {
                case 13: // enter key
                    x = "61.gif"
                    break;
            }
        } else if (x == "61.gif") { //muffin or milk again again
            switch(e.keyCode) {
                case 38: // up arrow
                    x = "5.gif"
                    break;
                case 37: // left arrow
                    x = "5.gif"
                    break;
                case 39: // right arrow to final no more milk
                    x = "62.jpg"
                    break;
            }
        } else if (x == "62.jpg") { //final no more milk
            switch(e.keyCode) {
                case 13: // enter key
                    x = "63.gif"
                    break;
            }
        } else if (x == "63.gif") { //muffin or milk again
            switch(e.keyCode) {
                case 38: // up arrow
                    x = "5.gif"
                    break;
                case 37: // left arrow
                    x = "5.gif"
                    break;
                case 39: // right arrow to final no more milk
                    x = "62.jpg"
                    break;
            }
        } else if (x == "70.gif") { //muffin or milk again
            switch(e.keyCode) {
                case 13: // enter key
                    x = "6.jpg"
                    break;
            }
        } else if (x == "80.jpg") { //you didnt choose to offer a piece!
            switch(e.keyCode) {
                case 13: // enter key
                    x = "18.jpg"
                    break;
            }
        }
    }

    $: innerWidth=1024;
</script>


<svelte:window on:keydown|preventDefault={onKeyDown} bind:innerWidth/>

{#if innerWidth<1024}
    <body>
        <p id="mobileText">hi, this unfortunaly ain't availble on ur phone. feel free to check this out on your computer!</p>
    </body>
{:else}
    <body>
        <img class="image" src="{x}" alt="">
        {#if x == "end.jpg"}
            <div id="endText">
                <h1>congrats, you've completed</h1>
                <h1>the muffin dilemma!</h1>
                <br><br>
                <h2>here's what other people did:</h2>
                <a href="https://docs.google.com/spreadsheets/d/1ri_5OrHj3qfhploGfkRtmem8R2R28C-StAfZf21ZX94/edit?resourcekey=&gid=1236801401#gid=1236801401"><h2>&gt;&gt;&gt; results spreadsheet &lt;&lt;&lt;</h2></a>
            </div>
        {/if}
    </body>
{/if}

<style>
    body{
        background-color: #2fd9ed;
        cursor: crosshair;
    }

    .image{
        object-fit: cover;
        height: 100vh;
        max-width: 100vw;
        max-height: 100vh;
        display: block;
        margin-left: auto;
        margin-right: auto;
      }

      h1{
        color: white;
        font-size: 5vw;
        font-family: Arial, Helvetica, sans-serif;
        text-align: center;
      }

      h2{
        color: white;
        font-size: 3vw;
        font-family: Arial, Helvetica, sans-serif;
        text-align: center;
      }

      a{
        text-decoration: none;
      }

      #endText{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }

      #mobileText{
        color: white;
        font-size: 5vw;
        font-family: Arial, Helvetica, sans-serif;
        line-height: 1.5;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
</style>