!function(){function e(e){test.mode(e,r,Array.prototype.slice.call(arguments,1))}var r=CodeMirror.getMode({indentUnit:4},{name:"python",version:3,singleLineStringErrors:!1});e("decoratorStartOfLine","[meta @dec]","[keyword def] [def function]():","    [keyword pass]"),e("decoratorIndented","[keyword class] [def Foo]:","    [meta @dec]","    [keyword def] [def function]():","        [keyword pass]"),e("matmulWithSpace:","[variable a] [operator @] [variable b]"),e("matmulWithoutSpace:","[variable a][operator @][variable b]"),e("matmulSpaceBefore:","[variable a] [operator @][variable b]");for(var a=["+","-","*","/","=","!",">","<"],t=0;t<a.length;++t){var i=a[t];e("before_equal_sign_"+i,"[variable a] [operator "+i+"=] [variable b]")}e("fValidStringPrefix","[string f'this is a {formatted} string']"),e("uValidStringPrefix","[string u'this is an unicode string']")}();