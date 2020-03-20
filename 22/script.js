let str = 'sss site.ru zzz site.com kkk';

document.write(str.replace(/(\w+\.ru|\w+\.com)/g, '<a href="http://$1">$1</a>'));