// 未来更新版本
let styleCssRules
for(style of document.styleSheets){
	try{
		styleCssRules = style.cssRules;
	} catch (e) {
		continue;
	}
	for( css of styleCssRules ){
		let cssStyle = css.style;
		if( !cssStyle ) continue;
		let filter = cssStyle.filter;
		if( !filter ) continue;
		console.log(filter)
		if( filter=="grayscale(100%)" ){
			cssStyle.filter = ""
		}
	}
}