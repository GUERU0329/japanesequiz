const cakeShopQuiz = {
  id: "cake-shop",
  title: "洋菓子店での会話",
  description: "おすすめを伝えるときの敬語",
  steps: [
    {
      image: "/image/cake-1.jpg",
      speaker: "ナレーション",
      text: (
        <>
          あなたは
          <ruby>洋菓子店<rt>ようがしてん</rt></ruby>で
          <ruby>店員<rt>てんいん</rt></ruby>をしています。
        </>
      ),
      audio: "/audio/cake-1.wav",
    },
    {
      image: "/image/cake-2.jpg",
      speaker: "ナレーション",
      text: (
        <>
          お<ruby>客<rt>きゃく</rt></ruby>さんが
          <ruby>友達<rt>ともだち</rt></ruby>への
          お<ruby>土産<rt>みやげ</rt></ruby>を
          <ruby>探<rt>さが</rt></ruby>しに
          やってきました。
        </>
      ),
      audio: "/audio/cake-2.wav",
    },
    {
      image: "/image/cake-3.jpg",
      speaker: "ナレーション",
      text: (
        <>
          ですが、どのお<ruby>菓子<rt>かし</rt></ruby>を
          <ruby>買<rt>か</rt></ruby>えばよいか
          <ruby>悩<rt>なや</rt></ruby>んでいるようです。
        </>
      ),
      audio: "/audio/cake-3.wav",
    },
    {
      image: "/image/cake-4.jpg",
      speaker: "ナレーション",
      text: (
        <>
          お<ruby>客<rt>きゃく</rt></ruby>さんが
          あなたのほうへ
          <ruby>向<rt>む</rt></ruby>かってきます。
        </>
      ),
      audio: "/audio/cake-4.wav",
    },
    {
      image: "/image/cake-5.jpg",
      speaker: "お客さん",
      text: (
        <>
          すみません。
          お<ruby>土産<rt>みやげ</rt></ruby>のお<ruby>菓子<rt>かし</rt></ruby>を
          <ruby>買<rt>か</rt></ruby>いたいのですが、
          どれがおすすめか
          <ruby>教<rt>おし</rt></ruby>えてもらってもいいですか。
        </>
      ),
      audio: "/audio/cake-5.wav",
    },
  ],
  question: {
    prompt: (
      <>
        このあと、
        <ruby>店員<rt>てんいん</rt></ruby>である
        あなたの
        <ruby>返答<rt>へんとう</rt></ruby>として
        いちばん
        <ruby>自然<rt>しぜん</rt></ruby>なのはどれ？
      </>
    ),
    audio: "/audio/cake-6.wav",
    choices: [
      {
        text: <>こちらの<ruby>商品<rt>しょうひん</rt></ruby>をお<ruby>買<rt>か</rt></ruby>い<ruby>求<rt>もと</rt></ruby>めください。</>,
        isCorrect: false,
        reaction: {
          image: "/image/cake-reaction-1.jpg",
          speaker: "お客さん",
          text: <>え、はいわかりました……。</>,
          thought: (
            <>
              ちょっと
              <ruby>無理<rt>むり</rt></ruby>やり
              <ruby>勧<rt>すす</rt></ruby>められている
              <ruby>感<rt>かん</rt></ruby>じがするな…
            </>
          ),
          audio: "/audio/cake-reaction-1.wav",
        },
      },
      {
        text: <>こちらの<ruby>商品<rt>しょうひん</rt></ruby>がおすすめでございます。</>,
        isCorrect: true,
        reaction: {
          image: "/image/cake-reaction-2.jpg",
          speaker: "お客さん",
          text: <>ありがとうございます。では、それにします。</>,
          thought: (
            <>
              <ruby>丁寧<rt>ていねい</rt></ruby>で
              <ruby>自然<rt>しぜん</rt></ruby>な
              <ruby>言<rt>い</rt></ruby>い
              <ruby>方<rt>かた</rt></ruby>でいい<ruby>気分<rt>きぶん</rt></ruby>。
            </>
          ),
          audio: "/audio/cake-reaction-2.wav",
        },
      },
      {
        text: <>こちらの<ruby>商品<rt>しょうひん</rt></ruby>がおすすめでいらっしゃいます。</>,
        isCorrect: false,
        reaction: {
          image: "/image/cake-reaction-3.jpg",
          speaker: "お客さん",
          text: <>え？なんですか？</>,
thought: (
  <>
    「いらっしゃいます」って、
    ふつうは
    <ruby>人<rt>ひと</rt></ruby>に
    <ruby>使<rt>つか</rt></ruby>う
    <ruby>言<rt>い</rt></ruby>い
    <ruby>方<rt>かた</rt></ruby>じゃないかな。
  </>
),
          audio: "/audio/cake-reaction-3.wav",
        },
      },
      {
        text: <>こちらの<ruby>商品<rt>しょうひん</rt></ruby>がおすすめです。</>,
          isCorrect: false,
        reaction: {
          image: "/image/cake-reaction-4.jpg",
          speaker: "お客さん",
          text: <>ありがとうございます。</>,
          thought: (
            <>
              <ruby>普通<rt>ふつう</rt></ruby>に
              <ruby>自然<rt>しぜん</rt></ruby>だけど、
              <ruby>接客<rt>せっきゃく</rt></ruby>としては
              すこし
              <ruby>軽<rt>かる</rt></ruby>いかな。
            </>
          ),
          
          audio: "/audio/cake-reaction-4.wav",
        },
      },
    ],
  },
  explanation: {
    title: (
      <>
        おすすめを
        <ruby>伝<rt>つた</rt></ruby>えるときの
        <ruby>敬語<rt>けいご</rt></ruby>
      </>
    ),
    intro: (
      <>
        この<ruby>場面<rt>ばめん</rt></ruby>では、
        <ruby>店員<rt>てんいん</rt></ruby>として
        お<ruby>客<rt>きゃく</rt></ruby>さんに
        おすすめを
        <ruby>伝<rt>つた</rt></ruby>える
        <ruby>言<rt>い</rt></ruby>い
        <ruby>方<rt>かた</rt></ruby>が
        テーマです。
      </>
    ),
    blocks: [
      {
        label: "おすすめです",
        text: (
          <>
            「おすすめです」は
            <ruby>自然<rt>しぜん</rt></ruby>ですが、
            <ruby>接客<rt>せっきゃく</rt></ruby>では
            すこし
            あっさりした
            <ruby>印象<rt>いんしょう</rt></ruby>に
            なることがあります。
          </>
        ),
      },
      {
        label: "おすすめでございます",
        text: (
          <>
            「おすすめでございます」は、
            <ruby>接客<rt>せっきゃく</rt></ruby>で
            よく
            <ruby>使<rt>つか</rt></ruby>われる
            <ruby>丁寧<rt>ていねい</rt></ruby>で
            <ruby>自然<rt>しぜん</rt></ruby>な
            <ruby>言<rt>い</rt></ruby>い
            <ruby>方<rt>かた</rt></ruby>です。
          </>
        ),
      },
      {
        label: "おすすめでいらっしゃいます",
        text: (
          <>
            「いらっしゃる」は
            <ruby>人<rt>ひと</rt></ruby>の
            <ruby>動作<rt>どうさ</rt></ruby>や
            <ruby>状態<rt>じょうたい</rt></ruby>を
            <ruby>高<rt>たか</rt></ruby>める
            ときに
            <ruby>使<rt>つか</rt></ruby>うので、
            <ruby>商品<rt>しょうひん</rt></ruby>に
            <ruby>使<rt>つか</rt></ruby>うと
            <ruby>不自然<rt>ふしぜん</rt></ruby>です。
          </>
        ),
      },
      {
        label: "お買い求めください",
        text: (
          <>
            「お<ruby>買<rt>か</rt></ruby>い
            <ruby>求<rt>もと</rt></ruby>めください」は
            <ruby>間違<rt>まちが</rt></ruby>いではありませんが、
            おすすめを
            <ruby>伝<rt>つた</rt></ruby>える
            <ruby>返答<rt>へんとう</rt></ruby>としては
            すこし
            <ruby>押<rt>お</rt></ruby>しつけがましく
            <ruby>聞<rt>き</rt></ruby>こえます。
          </>
        ),
      },
    ],
    summary: (
      <>
        この<ruby>場面<rt>ばめん</rt></ruby>では
        「こちらの<ruby>商品<rt>しょうひん</rt></ruby>がおすすめでございます。」
        が、
        いちばん
        <ruby>自然<rt>しぜん</rt></ruby>な
        <ruby>接客<rt>せっきゃく</rt></ruby>の
        <ruby>言<rt>い</rt></ruby>い
        <ruby>方<rt>かた</rt></ruby>です。
      </>
    ),
  },
};

export default cakeShopQuiz;