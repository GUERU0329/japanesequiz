const cafeQuiz = {
  id: "cafe",
  title: "喫茶店での会話",
  description: "ほめられたときの返答",
  steps: [
    {
      image:
        "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=80",
      speaker: "ナレーション",
      text: (
        <>
          あなたは<ruby>喫茶店<rt>きっさてん</rt></ruby>で
          <ruby>友達<rt>ともだち</rt></ruby>と
          <ruby>会話<rt>かいわ</rt></ruby>しています。
        </>
      ),
      audio: "/audio/cafe-1.wav",
    },
    {
      image: "/image/cafe-1.jpg",
      speaker: "ナレーション",
      text: (
        <>
          <ruby>隣<rt>となり</rt></ruby>の
          <ruby>席<rt>せき</rt></ruby>のお
          <ruby>客<rt>きゃく</rt></ruby>さんが、
          <ruby>食器<rt>しょっき</rt></ruby>を
          <ruby>片付<rt>かたづ</rt></ruby>けずに
          <ruby>出<rt>で</rt></ruby>ていきました。
        </>
      ),
      audio: "/audio/cafe-2.wav",
    },
    {
      image: "/image/cafe-2_5.jpg",
      speaker: "ナレーション",
      text: (
        <>
          <ruby>新<rt>あたら</rt></ruby>しく
          <ruby>来<rt>き</rt></ruby>た
          <ruby>客<rt>きゃく</rt></ruby>は、
          その<ruby>席<rt>せき</rt></ruby>を
          <ruby>使<rt>つか</rt></ruby>っていいのか
          <ruby>分<rt>わ</rt></ruby>からず、
          <ruby>少<rt>すこ</rt></ruby>し
          <ruby>困<rt>こま</rt></ruby>った
          <ruby>様子<rt>ようす</rt></ruby>で
          <ruby>聞<rt>き</rt></ruby>いてきました。
        </>
      ),
      audio: "/audio/cafe-2_5.wav",
    },
    {
      image: "/image/cafe-2.jpg",
      speaker: "新しく来た客",
      text: (
        <>
          すみません。この<ruby>席<rt>せき</rt></ruby>って
          <ruby>使<rt>つか</rt></ruby>っても
          <ruby>大丈夫<rt>だいじょうぶ</rt></ruby>ですかね？
        </>
      ),
      audio: "/audio/cafe-3.wav",
    },
    {
      image: "/image/cafe-3.jpg",
      speaker: "あなた",
      text: (
        <>
          <ruby>大丈夫<rt>だいじょうぶ</rt></ruby>ですよ。
          <ruby>前<rt>まえ</rt></ruby>の
          <ruby>人<rt>ひと</rt></ruby>が
          <ruby>置<rt>お</rt></ruby>いたままにしたのだと
          <ruby>思<rt>おも</rt></ruby>います。
        </>
      ),
    audio: "/audio/cafe-4.wav",
    },
    {
      image: "/image/cafe-4.jpg",
      speaker: "新しく来た客",
      text: (
        <>
          えっ、<ruby>日本語<rt>にほんご</rt></ruby>
          お<ruby>上手<rt>じょうず</rt></ruby>ですね！
        </>
      ),
      audio: "/audio/cafe-5.wav",
    },
  ],
  question: {
    prompt: (
      <>
        このあと、あなたの<ruby>返答<rt>へんとう</rt></ruby>として
        いちばん<ruby>自然<rt>しぜん</rt></ruby>なのはどれ？
      </>
    ),
    audio: "/audio/cafe-6.wav",
    choices: [
      {
        text: <>いえ、そんなことはないですよね。</>,
        isCorrect: false,
        reaction: {
          image: "/image/reaction-1.jpg",
          speaker: "新しく来た客",
          text: (
<>
    あ、いえ……
    <ruby>私<rt>わたし</rt></ruby>は
    そう
    <ruby>思<rt>おも</rt></ruby>ったんですけど……。
  </>
          ),
          thought: (
            <>
              うーん、<ruby>私<rt>わたし</rt></ruby>に
              <ruby>同意<rt>どうい</rt></ruby>を
              <ruby>求<rt>もと</rt></ruby>められてもなぁ。
            </>
          ),
          audio: "/audio/reaction-1.wav",
        },
      },
      {
        text: <>いえ、そんなことはないですわよ。</>,
        isCorrect: false,
        reaction: {
          image: "/image/reaction-1.jpg",
          speaker: "新しく来た客",
          text: <>うん？そうですか。</>,
          thought: (
            <>
              <ruby>変<rt>へん</rt></ruby>なしゃべり
              <ruby>方<rt>かた</rt></ruby>をする
              <ruby>人<rt>ひと</rt></ruby>だなぁ。
              イギリス<ruby>人<rt>じん</rt></ruby>なのかな？
            </>
          ),
          audio: "/audio/reaction-2.wav",
        },
      },
      {
        text: <>いえ、そんなことないですよ。</>,
        isCorrect: true,
        reaction: {
          image: "/image/reaction-3.jpg",
          speaker: "新しく来た客",
          text: (
            <>
              いえいえ、でも<ruby>本当<rt>ほんとう</rt></ruby>に
              <ruby>自然<rt>しぜん</rt></ruby>でしたよ。
            </>
          ),
          thought: (
            <>
              <ruby>感じ<rt>かんじ</rt></ruby>のいい
              <ruby>返<rt>かえ</rt></ruby>し
              <ruby>方<rt>かた</rt></ruby>だなぁ。
              <ruby>会話<rt>かいわ</rt></ruby>しやすい
              <ruby>人<rt>ひと</rt></ruby>だね。
            </>
          ),
          audio: "/audio/reaction-3.wav",
        },
      },
      {
        text: <>いえ、そんなことないですね。</>,
        isCorrect: false,
        reaction: {
          image: "/image/reaction-1.jpg",
          speaker: "新しく来た客",
          text: <>あれ？そうなんですね…</>,
          thought: (
            <>
              え、<ruby>私<rt>わたし</rt></ruby>と
              <ruby>共有<rt>きょうゆう</rt></ruby>する
              <ruby>話<rt>はなし</rt></ruby>なのかな。
              ちょっと<ruby>変<rt>へん</rt></ruby>かも。
            </>
          ),
          audio: "/audio/reaction-4.wav",
        },
      },
    ],
  },
explanation: {
  title: (
    <>
      「よ」「ね」「よね」の
      <ruby>感<rt>かん</rt></ruby>じ
      <ruby>方<rt>かた</rt></ruby>の
      <ruby>違<rt>ちが</rt></ruby>い
    </>
  ),
  intro: (
    <>
      この<ruby>場面<rt>ばめん</rt></ruby>では、
      ほめられたときに
      どう<ruby>返<rt>かえ</rt></ruby>すかだけでなく、
      <ruby>文末<rt>ぶんまつ</rt></ruby>の
      <ruby>終助詞<rt>しゅうじょし</rt></ruby>(Final particles)が
      <ruby>相手<rt>あいて</rt></ruby>に
      どんな
      <ruby>印象<rt>いんしょう</rt></ruby>を
      <ruby>与<rt>あた</rt></ruby>えるかが
      <ruby>大切<rt>たいせつ</rt></ruby>です。
    </>
  ),
  blocks: [
    {
      label: "よ",
      text: (
        <>
          「よ」は、
          <ruby>自分<rt>じぶん</rt></ruby>の
          <ruby>判断<rt>はんだん</rt></ruby>や
          <ruby>気持<rt>きも</rt></ruby>ちを
          <ruby>相手<rt>あいて</rt></ruby>に
          <ruby>自然<rt>しぜん</rt></ruby>に
          <ruby>伝<rt>つた</rt></ruby>える
          <ruby>感<rt>かん</rt></ruby>じです。
        </>
      ),
    },
    {
      label: "ね",
      text: (
        <>
「ね」は、
<ruby>話<rt>はな</rt></ruby>し
<ruby>手<rt>て</rt></ruby>が
<ruby>相手<rt>あいて</rt></ruby>に
<ruby>共有<rt>きょうゆう</rt></ruby>や
<ruby>確認<rt>かくにん</rt></ruby>を
<ruby>求<rt>もと</rt></ruby>める
<ruby>感<rt>かん</rt></ruby>じがあります。
        </>
      ),
    },
    {
      label: "よね",
      text: (
        <>
「よね」は、「よ」と「ね」の
<ruby>性質<rt>せいしつ</rt></ruby>を
<ruby>併<rt>あわ</rt></ruby>せ
<ruby>持<rt>も</rt></ruby>つ
<ruby>表現<rt>ひょうげん</rt></ruby>です。
<ruby>伝<rt>つた</rt></ruby>えながら、
<ruby>相手<rt>あいて</rt></ruby>にも
<ruby>同意<rt>どうい</rt></ruby>や
<ruby>確認<rt>かくにん</rt></ruby>を
<ruby>求<rt>もと</rt></ruby>める
<ruby>感<rt>かん</rt></ruby>じがあります。
        </>
      ),
    },
  ],
  summary: (
    <>
      この<ruby>場面<rt>ばめん</rt></ruby>では
      「よ」がもっとも
      <ruby>自然<rt>しぜん</rt></ruby>です。
    </>
  ),
  note: (
    <>
      ちなみに「わよ」は、
      <ruby>現代<rt>げんだい</rt></ruby>の
      <ruby>日常会話<rt>にちじょうかいわ</rt></ruby>では
      あまり
      <ruby>多<rt>おお</rt></ruby>くありません。
      フィクションでは、
      <ruby>上品<rt>じょうひん</rt></ruby>な
      <ruby>女性<rt>じょせい</rt></ruby>や
      お<ruby>嬢様<rt>じょうさま</rt></ruby>のような
      <ruby>話<rt>はな</rt></ruby>し
      <ruby>方<rt>かた</rt></ruby>として
      <ruby>使<rt>つか</rt></ruby>われることがあります。
    </>
  ),
},
};

export default cafeQuiz;