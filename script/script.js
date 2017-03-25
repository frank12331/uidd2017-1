
$(document).ready(function(){
	//第一頁 左下角
	$('.download').on('mouseenter',function(){
		$('.store').slideDown();
	});
	$('.p1_l_d').on('mouseleave',function(){
		$('.store').slideUp();
	});
	//第一頁 上方選單
	$('.m_sub').on('mouseenter',function(){
		$(this).css({'text-decoration': 'underline'});
	})
	$('.m_sub').on('mouseleave',function(){
		$(this).css({'text-decoration': 'none'});
	})
	
	$('.about_list').find('div').on('mouseenter',function(){
		$(this).css({'text-decoration': 'underline'});
	})
	$('.about_list').find('div').on('mouseleave',function(){
		$(this).css({'text-decoration': 'none'});
	})
	
	$('.about').on('mouseenter',function(){
		$('.about_list').slideDown();
	});
	$('.home').on('mouseleave',function(){
		$('.about_list').slideUp();
	});
	
	//第二頁
	var src_l = ["img/cheap1-03.png", "img/secure1-02.png", "img/convenient1-05.png","img/fast1-04.png","img/smart1-01.png"];
	var src_d = ["img/cheap-03.png", "img/secure-02.png", "img/convenient-05.png","img/fast-04.png","img/smart-01.png"];
	var src_t = ["Secure Financial Services, Inc. provides hight quality trade analysis reports, starting with the standard profit and loss analysis, for targeted legal response.",
	"The Trump administration has issued a presidential permit to pipeline builder TransCanada to build the Keystone XL pipeline. President Donald Trump is expected to discuss this decision in a press conference later today",
	"Former Penn State president Graham Spanier has been found guilty of one count of child endangerment over his handling of a child sex abuse complaint against retired assistant football coach Jerry Sandusky",
	"A charity rescue boats discovery of five corpses and two sinking rubber dinghies 15 miles from the Libyan coast suggests that more than 250 African migrants may have drowned in the Mediterranean. It seems clear that they sunk, the charity said",
	"President Donald Trump has brought to the Oval Office an entirely different set of assumptions about the proper behavior of a public official, and introduced to the country entirely new rules for public debate. Read more in our new cover story"]
	function dark(he){
		
		var temp;
		var check=0;
		for(var i=0;i<5;i++){
			if(he.attr('src')==src_l[i]){
				
				check=1;
				temp=i;
			}
		}
		
		if(check==1){
			he.attr('src',src_d[temp]);
		}
	}
	
	$('.feature_icon').find('img').on('mouseenter',function(){
		var temp;
		var check=0;
		for(var i=0;i<5;i++){
			if($(this).attr('src')==src_d[i]||$(this).attr('src')==src_l[i]){
				
				check=1;
				temp=i;
				dark($(this).siblings(i));
			}
			else{
				dark($('#'+i));
			}
		}
		//改文字
		if(check==1){
			$(this).attr('src',src_l[temp]);
			$('.p2_c_d_p1').text(src_t[temp]);
			$('.p2_c_d_p2').data("kind",temp);
		}
	});
	
	//第三頁
	var video = ["https://www.youtube.com/embed/QbTYWE2Bv00?rel=0&amp;controls=0&amp;showinfo=0",
	"https://www.youtube.com/embed/m2zeUivkBr4?rel=0&amp;controls=0&amp;showinfo=0",
	"https://www.youtube.com/embed/K-n36zo3Axk?rel=0&amp;controls=0&amp;showinfo=0",
	"https://www.youtube.com/embed/fFtGfyruroU?rel=0&amp;controls=0&amp;showinfo=0",
	"https://www.youtube.com/embed/TxWLybPwBzs?rel=0&amp;controls=0&amp;showinfo=0"];
	var title = ["How FinTech is Shaping the Future of Banking",
	"Trump Administration Approves Permit to Build Keystone Pipeline",
	"Egyptian President Hosni Mubarak Released from Custody",
	"Texas A&M Elected Its First Gay Student Body President.",
	"World's Most Expensive Home Hits Market for 1 Billion"];
	var content = ["While FinTech is revolutionizing the banking industry and fiving millions of people access to financial services for the first time, new banking models are emerging with FinTech start-ups and tech firms potentially disrupting the status quo. But business schools and universities are now preparing future bankers for theses changes, says FinTech thought leader Hnri Arslanian.",
	"In a reversal of the Obama administration's earlier decision, the Trump administration issued a presidential permit enabling Calgary-based TransCanada to build the pipeline. Appearing alongside TransCanada's CEO in the Oval Office, Trump called it part of a new era of American energy policy that he said would lower costs, reduce reliance on foreign oil and create thousands of U.S. jobs.,",
	"CAIRO — An Egyptian security official says ousted President Hosni Mubarak is back at home, free following his release from custody after legal proceedings that took years during which the country witnessed major upheavals.The official says Mubarak left the Armed Forces hospital in Cairo's southern suburb of Maadi earlier in the morning on Friday and went to his house in the upscale district of Heliopolis under heavy security measures.",
	"The former Texas governor said he was at first proud to hear that his alma mater had elected its first openly gay student body president, Bobby Brooks. But soon after, he found out that another candidate, Robert McIntosh, originally won the election, and Perry questioned whether McIntosh was disqualified in pursuit of diversity.",
	"According to the Daily Mail, the current owner of the 10-bedroom property, which has an Olympic-size swimming pool, is Suzanne Marnier-Lapostolle, a member of the Grand Marnier family, who is looking for something smaller. The house has been in the family, famous for cognacs and liqueurs, since the 1920s."];
	
	$('.p2_c_d_p2').on('click',function(){
		
		switch(+$('.p2_c_d_p2').data("kind")){
			case 0:
				$('.video-container').find('iframe').attr('src',video[0]);
				$('.video_title').text(title[0]);
				$('.video_text').text(content[0]);
				break;
			case 1:
				$('.video-container').find('iframe').attr('src',video[1]);
				$('.video_title').text(title[1]);
				$('.video_text').text(content[1]);
				break;
			case 2:
				$('.video-container').find('iframe').attr('src',video[2]);
				$('.video_title').text(title[2]);
				$('.video_text').text(content[2]);
				break;
			case 3:
				$('.video-container').find('iframe').attr('src',video[3]);
				$('.video_title').text(title[3]);
				$('.video_text').text(content[3]);
				break;
			case 4:
				$('.video-container').find('iframe').attr('src',video[1]);
				$('.video_title').text(title[4]);
				$('.video_text').text(content[4]);
				break;
		}
	});
	
});