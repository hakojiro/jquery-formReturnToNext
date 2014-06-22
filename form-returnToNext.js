// フォームでエンター押した時に次のインプット要素にフォーカス
$(function(){
	$(':input').keydown(function(e) {
		switch (e.keyCode) {
		case 13: // enter
			i = $(this).index('input,textarea');
			if($('input,textarea').eq(i+1).size() > 0){
				$('input,textarea').eq(i+1).focus();
			}
			return false;
			break;
		}
	});
});
