const coloradoSnowQuiz = {
  id: "colorado-snow",
  title: "コロラド州の天気についての会話",
  description: "意外さを強調する表現",
  steps: [
    {
      image: "/image/coloradoSnow/scene-1.jpg",
      speaker: "ナレーション",
      text: (
        <>
          あなたは
          コロラドでの
          <ruby>生活<rt>せいかつ</rt></ruby>について、
          <ruby>友達<rt>ともだち</rt></ruby>と
          <ruby>話<rt>はな</rt></ruby>しています。
        </>
      ),
      audio: "/audio/coloradoSnow/scene-1.wav",
    },
    {
      image: "/image/coloradoSnow/scene-3.jpg",
      speaker: "ナレーション",
      text: (
        <>
          コロラドの
          <ruby>天気<rt>てんき</rt></ruby>について
          <ruby>聞<rt>き</rt></ruby>いてみました。
        </>
      ),
      audio: "/audio/coloradoSnow/scene-2.wav",
    },
    {
      image: "/image/coloradoSnow/scene-2.jpg",
      speaker: "あなた",
      text: (
        <>
          <ruby>今<rt>いま</rt></ruby>は
          <ruby>六月<rt>ろくがつ</rt></ruby>だけど、
          そっちは
          どんな
          <ruby>感<rt>かん</rt></ruby>じ？
        </>
      ),
      audio: "/audio/coloradoSnow/scene-3.wav",
    },
    {
      image: "/image/coloradoSnow/scene-4.jpg",
      speaker: "友達",
      text: (
        <>
          コロラド？
          <ruby>東京<rt>とうきょう</rt></ruby>より
          ちょっと
          <ruby>寒<rt>さむ</rt></ruby>いよ。
          <ruby>場所<rt>ばしょ</rt></ruby>にもよるけど、
          <ruby>雪<rt>ゆき</rt></ruby>が
          <ruby>降<rt>ふ</rt></ruby>ることもあるよ。
        </>
      ),
      audio: "/audio/coloradoSnow/scene-4.wav",
    },
  ],
  question: {
prompt: (
  <>
    このあとの
    <ruby>返答<rt>へんとう</rt></ruby>として、
    もっとも
    <ruby>適切<rt>てきせつ</rt></ruby>に
    <ruby>驚<rt>おどろ</rt></ruby>きが
    <ruby>伝<rt>つた</rt></ruby>わるのはどれ？
  </>
),
    audio: "/audio/coloradoSnow/question.wav",
choices: [

  {
    text: (
      <>
        えっ、
        <ruby>六月<rt>ろくがつ</rt></ruby>も
        <ruby>雪<rt>ゆき</rt></ruby>が
        <ruby>降<rt>ふ</rt></ruby>るの？
      </>
    ),
    isCorrect: false,
    reaction: {
      image: "/image/coloradoSnow/reaction-2.jpg",
      speaker: "友達",
      text: (
        <>
          うん、
          <ruby>降<rt>ふ</rt></ruby>ることはあるよ。
        </>
      ),
      thought: (
        <>
          <ruby>意味<rt>いみ</rt></ruby>は
          わかるけど、
          ちょっと
          <ruby>普通<rt>ふつう</rt></ruby>すぎるかな。
          <ruby>驚<rt>おどろ</rt></ruby>きが
          少し
          <ruby>弱<rt>よわ</rt></ruby>い。
        </>
      ),
      audio: "/audio/coloradoSnow/reaction-2.wav",
    },
  },
  {
    text: (
      <>
        えっ、
        <ruby>六月<rt>ろくがつ</rt></ruby>まで
        <ruby>雪<rt>ゆき</rt></ruby>が
        <ruby>降<rt>ふ</rt></ruby>るの？
      </>
    ),
    isCorrect: false,
    reaction: {
      image: "/image/coloradoSnow/reaction-2.jpg",
      speaker: "友達",
      text: (
        <>
          うん、
          <ruby>六月<rt>ろくがつ</rt></ruby> まで<ruby>降<rt>ふ</rt></ruby>ることはあるよ。
        </>
      ),
      thought: (
        <>
          これは
          「<ruby>六月<rt>ろくがつ</rt></ruby>まで
          <ruby>続<rt>つづ</rt></ruby>く」
          って
          <ruby>感<rt>かん</rt></ruby>じが
          <ruby>強<rt>つよ</rt></ruby>いな。
          いま
          <ruby>言<rt>い</rt></ruby>いたい
          <ruby>驚<rt>おどろ</rt></ruby>きとは
          ちょっと
          ちがう。
        </>
      ),
      audio: "/audio/coloradoSnow/reaction-3.wav",
    },
  },
    {
    text: (
      <>
        えっ、
        <ruby>六月<rt>ろくがつ</rt></ruby>にさえ
        <ruby>雪<rt>ゆき</rt></ruby>が
        <ruby>降<rt>ふ</rt></ruby>るの？
      </>
    ),
    isCorrect: true,
    reaction: {
      image: "/image/coloradoSnow/reaction-1.jpg",
      speaker: "友達",
      text: (
        <>
          そうそう。
          だから
          <ruby>油断<rt>ゆだん</rt></ruby>できないんだよね。
        </>
      ),
      thought: (
        <>
          うん、
          「<ruby>六月<rt>ろくがつ</rt></ruby>にさえ」
          だと
          「えっ、
          そこまで？」
          っていう
          <ruby>驚<rt>おどろ</rt></ruby>きが
          ちゃんと
          <ruby>出<rt>で</rt></ruby>る。
        </>
      ),
      audio: "/audio/coloradoSnow/reaction-1.wav",
    },
  },
  {
    text: (
      <>
        えっ、
        <ruby>六月<rt>ろくがつ</rt></ruby>は
        <ruby>雪<rt>ゆき</rt></ruby>が
        <ruby>降<rt>ふ</rt></ruby>るの？
      </>
    ),
    isCorrect: false,
    reaction: {
      image: "/image/coloradoSnow/reaction-2.jpg",
      speaker: "友達",
      text: (
        <>
          うーん、
          ちょっと
          <ruby>意味<rt>いみ</rt></ruby>が
          <ruby>違<rt>ちが</rt></ruby>うかな。
        </>
      ),
      thought: (
        <>
          これは
          ただ
          <ruby>六月<rt>ろくがつ</rt></ruby>の
          <ruby>天気<rt>てんき</rt></ruby>を
          <ruby>聞<rt>き</rt></ruby>いてる
          だけっぽい。
          びっくりした
          <ruby>感<rt>かん</rt></ruby>じが
          あまり
          <ruby>出<rt>で</rt></ruby>ない。
        </>
      ),
      audio: "/audio/coloradoSnow/reaction-4.wav",
    },
  },
],
  },
 explanation: {
  title: (
    <>
      とりたて
      <ruby>助詞<rt>じょし</rt></ruby>の
      <ruby>使<rt>つか</rt></ruby>い
      <ruby>分<rt>わ</rt></ruby>け
      「さえ」vs「も」
    </>
  ),
  intro: (
    <>
      この
      <ruby>場面<rt>ばめん</rt></ruby>では、
      コロラドの
      <ruby>天気<rt>てんき</rt></ruby>について
      <ruby>聞<rt>き</rt></ruby>いて、
      どれだけ
      <ruby>意外<rt>いがい</rt></ruby>だったかを
      どう
      <ruby>表現<rt>ひょうげん</rt></ruby>するかが
      ポイントです。
    </>
  ),
 blocks: [
{
  label: "さえ",
  text: (
    <>
      「さえ」は、
      ふつうなら
      そうではないと
      <ruby>思<rt>おも</rt></ruby>われるものを
      取り立てて、
      「そこまでなのか」という
      <ruby>意外<rt>いがい</rt></ruby>さを
      はっきり
      <ruby>強<rt>つよ</rt></ruby>く
      <ruby>表<rt>あらわ</rt></ruby>します。
      たとえば
      「<ruby>六月<rt>ろくがつ</rt></ruby>に
      さえ
      <ruby>雪<rt>ゆき</rt></ruby>が
      <ruby>降<rt>ふ</rt></ruby>る」
      というと、
      <ruby>初夏<rt>しょか</rt></ruby>の
      イメージがある
      <ruby>六月<rt>ろくがつ</rt></ruby>ですら、
      という
      <ruby>驚<rt>おどろ</rt></ruby>きが
      よく
      <ruby>伝<rt>つた</rt></ruby>わります。
      <br />
      <br />
      また、
      すべての「さえ」は
      「も」と
      <ruby>交換<rt>こうかん</rt></ruby>することができます。
      たとえば、
      <br />
      <span className="example-good">
        「<ruby>六月<rt>ろくがつ</rt></ruby>に
        さえ
        <ruby>雪<rt>ゆき</rt></ruby>が
        <ruby>降<rt>ふ</rt></ruby>るの？」
        ➡
        「<ruby>六月<rt>ろくがつ</rt></ruby>も
        <ruby>雪<rt>ゆき</rt></ruby>が
        <ruby>降<rt>ふ</rt></ruby>るの？」
      </span>
      <br />
      のように
      <ruby>言<rt>い</rt></ruby>い
      <ruby>換<rt>か</rt></ruby>えることができます。
      ただし、
      「も」にすると
      <ruby>驚<rt>おどろ</rt></ruby>きや
      <ruby>意外<rt>いがい</rt></ruby>さの
      <ruby>表現<rt>ひょうげん</rt></ruby>としては、
      「さえ」ほど
      はっきり
      <ruby>伝<rt>つた</rt></ruby>わらなくなります。
    </>
  ),
},
    {
      label: "も",
      text: (
        <>
          「も」は、
          <ruby>基本的<rt>きほんてき</rt></ruby>には
          あるものを
          ほかのものと
          <ruby>並<rt>なら</rt></ruby>べたり、
          <ruby>追加<rt>ついか</rt></ruby>したりする
          <ruby>感<rt>かん</rt></ruby>じを
          <ruby>表<rt>あらわ</rt></ruby>します。
          ただし、
          <ruby>文脈<rt>ぶんみゃく</rt></ruby>によっては
          <ruby>意外<rt>いがい</rt></ruby>さを
          <ruby>表<rt>あらわ</rt></ruby>すこともできます。
          ただし、
          その
          <ruby>驚<rt>おどろ</rt></ruby>きは
          「さえ」より
          少し
          <ruby>曖昧<rt>あいまい</rt></ruby>です。
        <br />
        <br />
          「も」は
          ただ
          <ruby>並列<rt>へいれつ</rt></ruby>を
          <ruby>表<rt>あらわ</rt></ruby>すことができますが、
          「さえ」は
          そういう
          <ruby>使<rt>つか</rt></ruby>い
          <ruby>方<rt>かた</rt></ruby>はできません。
          <br />
          <span className="example-good">
            ⭕️ <ruby>五月<rt>ごがつ</rt></ruby>にも
            <ruby>六月<rt>ろくがつ</rt></ruby>にも
            <ruby>雪<rt>ゆき</rt></ruby>が
            <ruby>降<rt>ふ</rt></ruby>った
          </span>
          <span className="example-bad">
            ❌ <ruby>五月<rt>ごがつ</rt></ruby>に
            さえ
            <ruby>六月<rt>ろくがつ</rt></ruby>に
            さえ
            <ruby>雪<rt>ゆき</rt></ruby>が
            <ruby>降<rt>ふ</rt></ruby>った
          </span>
          このように、「も」は
          <ruby>並<rt>なら</rt></ruby>べる
          ときにも
          <ruby>使<rt>つか</rt></ruby>えますが、
          「さえ」は
          <ruby>意外<rt>いがい</rt></ruby>さを
          <ruby>伴<rt>ともな</rt></ruby>う
          <ruby>表現<rt>ひょうげん</rt></ruby>です。
        </>
      ),
    },
  ],
  summary: (
    <>
      「さえ」は
      <ruby>意外<rt>いがい</rt></ruby>さを
      はっきり
      <ruby>表<rt>あらわ</rt></ruby>します。
      「も」は
      <ruby>基本的<rt>きほんてき</rt></ruby>には
      <ruby>並列<rt>へいれつ</rt></ruby>や
      <ruby>追加<rt>ついか</rt></ruby>を
      <ruby>表<rt>あらわ</rt></ruby>し、
      <ruby>文脈<rt>ぶんみゃく</rt></ruby>によっては
      <ruby>意外<rt>いがい</rt></ruby>さも
      <ruby>表<rt>あらわ</rt></ruby>せますが、
      その
      <ruby>驚<rt>おどろ</rt></ruby>きは
      「さえ」ほど
      はっきりしません。
      この
      <ruby>場面<rt>ばめん</rt></ruby>では、
      「<ruby>六月<rt>ろくがつ</rt></ruby>に
      さえ
      <ruby>雪<rt>ゆき</rt></ruby>が
      <ruby>降<rt>ふ</rt></ruby>るの？」
      が
      もっとも
      <ruby>自然<rt>しぜん</rt></ruby>です。
      もしも<ruby>以前<rt>いぜん</rt></ruby>の<ruby>会話<rt>かいわ</rt></ruby>で、
      たとえば
      「<ruby>五月<rt>ごがつ</rt></ruby>にも
      <ruby>雪<rt>ゆき</rt></ruby>が
      <ruby>降<rt>ふ</rt></ruby>る」
      という
      <ruby>話<rt>はなし</rt></ruby>が
      すでに
      <ruby>出<rt>で</rt></ruby>ていれば、
      「<ruby>六月<rt>ろくがつ</rt></ruby>にも
      <ruby>雪<rt>ゆき</rt></ruby>が
      <ruby>降<rt>ふ</rt></ruby>るの？」
      も
      とても
      <ruby>自然<rt>しぜん</rt></ruby>です。
    </>
  ),
 note: (
    
  <>
    <ruby>豆知識<rt>まめちしき</rt></ruby>：
    「まで」も
    <ruby>意外<rt>いがい</rt></ruby>さを
    <ruby>表<rt>あらわ</rt></ruby>せますが、
    「〜に
    <ruby>加<rt>くわ</rt></ruby>えて
    〇〇まで」
    という
    <ruby>付<rt>つ</rt></ruby>け<ruby>加<rt>くわ</rt></ruby>える
    <ruby>感<rt>かん</rt></ruby>じがない
    <ruby>場合<rt>ばあい</rt></ruby>は<ruby>使<rt>つか</rt></ruby>えません。
         <span className="example-good">
        <ruby>生徒<rt>せいと</rt></ruby>に<ruby>加<rt>くわ</rt></ruby>えて
        <ruby>先生<rt>せんせい</rt></ruby>まで<ruby>笑<rt>わら</rt></ruby>っていた。
         </span>
         また、
  「まで」は
  <ruby>終点<rt>しゅうてん</rt></ruby>の
  <ruby>意味合<rt>いみあ</rt></ruby>いも
  <ruby>強<rt>つよ</rt></ruby>いので、
  「<ruby>六月<rt>ろくがつ</rt></ruby>まで
  <ruby>雪<rt>ゆき</rt></ruby>が
  <ruby>降<rt>ふ</rt></ruby>る」
  というと、
  <ruby>雪<rt>ゆき</rt></ruby>の
  <ruby>季節<rt>きせつ</rt></ruby>が
  そこを
  <ruby>終点<rt>しゅうてん</rt></ruby>として
  <ruby>続<rt>つづ</rt></ruby>く
  ように
  <ruby>聞<rt>き</rt></ruby>こえやすくなります。
  </>
),
},
};

export default coloradoSnowQuiz;