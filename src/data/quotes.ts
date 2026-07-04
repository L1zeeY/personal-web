interface Quote {
  text: string;
  author: string;
}

export const quotes: Quote[] = [
  { text: "种一棵树最好的时间是十年前，其次是现在。", author: "佚名" },
  { text: "不积跬步，无以至千里；不积小流，无以成江海。", author: "荀子" },
  { text: "人生如逆旅，我亦是行人。", author: "苏轼" },
  { text: "Stay hungry, stay foolish.", author: "Steve Jobs" },
  { text: "知行合一。", author: "王阳明" },
  { text: "The best time to plant a tree was 20 years ago. The second best time is now.", author: "Chinese Proverb" },
  { text: "博学之，审问之，慎思之，明辨之，笃行之。", author: "《中庸》" },
  { text: "路漫漫其修远兮，吾将上下而求索。", author: "屈原" },
  { text: "千里之行，始于足下。", author: "老子" },
  { text: "三人行，必有我师焉。", author: "孔子" },
  { text: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius" },
  { text: "天行健，君子以自强不息。", author: "《周易》" },
  { text: "世上无难事，只怕有心人。", author: "民间谚语" },
  { text: "志当存高远。", author: "诸葛亮" },
  { text: "业精于勤，荒于嬉；行成于思，毁于随。", author: "韩愈" },
  { text: "与其临渊羡鱼，不如退而结网。", author: "《汉书》" },
  { text: "The only impossible journey is the one you never begin.", author: "Tony Robbins" },
  { text: "不患人之不己知，患不知人也。", author: "孔子" },
  { text: "学而不思则罔，思而不学则殆。", author: "孔子" },
  { text: "往者不可谏，来者犹可追。", author: "《论语》" },
  { text: "Your time is limited, so don't waste it living someone else's life.", author: "Steve Jobs" },
  { text: "知者不惑，仁者不忧，勇者不惧。", author: "孔子" },
  { text: "锲而不舍，金石可镂。", author: "荀子" },
  { text: "不以物喜，不以己悲。", author: "范仲淹" },
  { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
  { text: "山重水复疑无路，柳暗花明又一村。", author: "陆游" },
  { text: "纸上得来终觉浅，绝知此事要躬行。", author: "陆游" },
  { text: "非淡泊无以明志，非宁静无以致远。", author: "诸葛亮" },
  { text: "天生我材必有用。", author: "李白" },
  { text: "长风破浪会有时，直挂云帆济沧海。", author: "李白" },
  { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
  { text: "海纳百川，有容乃大。", author: "林则徐" },
  { text: "千淘万漉虽辛苦，吹尽狂沙始到金。", author: "刘禹锡" },
  { text: "山不向我走来，我便向山走去。", author: "佚名" },
  { text: "腹有诗书气自华。", author: "苏轼" },
  { text: "The secret of getting ahead is getting started.", author: "Mark Twain" },
  { text: "时人不识凌云木，直待凌云始道高。", author: "杜荀鹤" },
  { text: "石以砥焉，化钝为利。", author: "刘禹锡" },
  { text: "道虽迩，不行不至；事虽小，不为不成。", author: "荀子" },
  { text: "It always seems impossible until it's done.", author: "Nelson Mandela" },
];

export function getDailyQuote(): Quote {
  const today = new Date();
  const startOfYear = new Date(today.getFullYear(), 0, 0);
  const diff = today.getTime() - startOfYear.getTime();
  const dayOfYear = Math.floor(diff / (1000 * 60 * 60 * 24));
  return quotes[dayOfYear % quotes.length];
}
