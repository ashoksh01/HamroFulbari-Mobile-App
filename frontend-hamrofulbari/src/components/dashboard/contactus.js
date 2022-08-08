import React from 'react'
import "../css/contactus.css";

function Contact() {
  return (
    <div>
      <section>
      <body class="conbody">
	<div class="concontainer">
		<div class="concontact-box">
			<div class="conleft"></div>
			<div class="conright">
				<h2 class="conh2">Contact Us</h2>
				<input type="text" class="confield" placeholder="Your Name"/>
				<input type="text" class="confield" placeholder="Your Email"/>
				<input type="text" class="confield" placeholder="Phone"/>
				<textarea placeholder="Message" class="confield"></textarea>
				<button class="conbtn">Send</button>
			</div>
		</div>
	</div>
</body>
      </section>
        
    </div>
    
  )
}

export default Contact