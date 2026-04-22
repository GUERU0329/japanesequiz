const earthquakeQuiz = {
  id: "earthquakeQuiz",
  title: "地震についての会話",
  description: "仮定的逆説の表現",
  steps: [
    {
      image: "/image/earthquake/scene-1.jpg",
      speaker: "ナレーション",
      text: (
        <>
          あなたは
          <ruby>友達<rt>ともだち</rt></ruby>が
          <ruby>住<rt>す</rt></ruby>んでいる
          <ruby>地域<rt>ちいき</rt></ruby>で
          <ruby>地震<rt>じしん</rt></ruby>が
          <ruby>起<rt>お</rt></ruby>きたという
          ニュースを
          <ruby>見<rt>み</rt></ruby>て、
          あわてて
          <ruby>電話<rt>でんわ</rt></ruby>しました。
        </>
      ),
      audio: "/audio/earthquake/scene-1.wav",
    },
    {
      image: "/image/earthquake/scene-2.jpg",
      speaker: "あなた",
      text: (
        <>
          もしもし、
          そっちは
          <ruby>大丈夫<rt>だいじょうぶ</rt></ruby>？
          けっこう
          <ruby>揺<rt>ゆ</rt></ruby>れなかった？
        </>
      ),
      audio: "/audio/earthquake/scene-2.wav",
    },
    {
      image: "/image/earthquake/scene-3.jpg",
      speaker: "友達",
      text: (
        <>
          ああ、
          ちょっと
          <ruby>揺<rt>ゆ</rt></ruby>れたけど
          どっちゅーことないやろ。
        </>
      ),
      audio: "/audio/earthquake/scene-3.wav",
    },
    {
      image: "/image/earthquake/scene-4.jpg",
      speaker: "あなた",
      text: (
        <>
          ほんとに？
          テレビで
          <ruby>速報<rt>そくほう</rt></ruby>が
          <ruby>出<rt>で</rt></ruby>たから
          びっくりしたよ。
        </>
      ),
      audio: "/audio/earthquake/scene-4.wav",
    },
    {
      image: "/image/earthquake/scene-5.jpg",
      speaker: "友達",
      text: (
        <>
          <ruby>震度<rt>しんど</rt></ruby>3なんか
          こっちでは
          <ruby>地震<rt>じしん</rt></ruby>のうちに
          <ruby>入<rt>はい</rt></ruby>らんわ。
        </>
      ),
      audio: "/audio/earthquake/scene-5.wav",
    },
  ],
  question: {
    prompt: (
      <>
        このあとの
        <ruby>返答<rt>へんとう</rt></ruby>として、
        もっとも
        <ruby>自然<rt>しぜん</rt></ruby>なのはどれ？
      </>
    ),
    audio: "/audio/earthquake/question.wav",
    choices: [
      {
        text: (
          <>
            そっか、
            たしかに
            <ruby>慌<rt>あわ</rt></ruby>てても
            しかたないよね。
          </>
        ),
        isCorrect: true,
        reaction: {
          image: "/image/earthquake/reaction-1.jpg",
          speaker: "友達",
          text: (
            <>
              せやろ。
              まあ
              <ruby>無事<rt>ぶじ</rt></ruby>やったし、
              <ruby>安心<rt>あんしん</rt></ruby>して。
            </>
          ),
          thought: (
            <>
              「ても」だと、
              あわてたとしても
              <ruby>状況<rt>じょうきょう</rt></ruby>は
              <ruby>変<rt>か</rt></ruby>わらない、
              っていう
              <ruby>感<rt>かん</rt></ruby>じが
              <ruby>自然<rt>しぜん</rt></ruby>に
              <ruby>出<rt>で</rt></ruby>る。
            </>
          ),
          audio: "/audio/earthquake/reaction-1.wav",
        },
      },
      {
        text: (
          <>
            そっか、
            たしかに
            <ruby>慌<rt>あわ</rt></ruby>てたけど
            しかたないよね。
          </>
        ),
        isCorrect: false,
        reaction: {
          image: "/image/earthquake/reaction-2.jpg",
          speaker: "友達",
          text: (
            <>
              うーん、
              <ruby>意味<rt>いみ</rt></ruby>は
              わかるけど、
              ちょっと
              ちがうかな。
            </>
          ),
          thought: (
            <>
              これは
              「もう
              <ruby>慌<rt>あわ</rt></ruby>てたけど」
              っていう
              <ruby>話<rt>はなし</rt></ruby>に
              <ruby>聞<rt>き</rt></ruby>こえる。
              ここで
              <ruby>言<rt>い</rt></ruby>いたい
              こととは
              少し
              ずれるな。
            </>
          ),
          audio: "/audio/earthquake/reaction-2.wav",
        },
      },
      {
        text: (
          <>
            そっか、
            たしかに
            <ruby>慌<rt>あわ</rt></ruby>てたのに
            しかたないよね。
          </>
        ),
        isCorrect: false,
        reaction: {
          image: "/image/earthquake/reaction-2.jpg",
          speaker: "友達",
          text: (
            <>
              それは
              ちょっと
              <ruby>変<rt>へん</rt></ruby>に
              <ruby>聞<rt>き</rt></ruby>こえるな。
            </>
          ),
          thought: (
            <>
              「のに」は
              <ruby>不満<rt>ふまん</rt></ruby>とか
              <ruby>意外<rt>いがい</rt></ruby>な
              <ruby>気持<rt>きも</rt></ruby>ちが
              <ruby>強<rt>つよ</rt></ruby>いから、
              ここでは
              あまり
              <ruby>合<rt>あ</rt></ruby>わない。
            </>
          ),
          audio: "/audio/earthquake/reaction-3.wav",
        },
      },
      {
        text: (
          <>
            そっか、
            たしかに
            <ruby>慌<rt>あわ</rt></ruby>てたなら
            しかたないよね。
          </>
        ),
        isCorrect: false,
        reaction: {
          image: "/image/earthquake/reaction-2.jpg",
          speaker: "友達",
          text: (
            <>
              それだと
              ちょっと
              <ruby>別<rt>べつ</rt></ruby>の
              <ruby>意味<rt>いみ</rt></ruby>に
              なるかな。
            </>
          ),
          thought: (
            <>
              「なら」は
              「もし
              そうなら」
              っていう
              <ruby>条件<rt>じょうけん</rt></ruby>っぽい。
              ここでの
              <ruby>言<rt>い</rt></ruby>い
              <ruby>方<rt>かた</rt></ruby>とは
              ちがう。
            </>
          ),
          audio: "/audio/earthquake/reaction-4.wav",
        },
      },
    ],
  },
 explanation: {
  title: (
    <>
      <ruby>仮定的<rt>かていてき</rt></ruby>
      <ruby>逆接<rt>ぎゃくせつ</rt></ruby>の
      「ても」
    </>
  ),
  intro: (
    <>
      この
      <ruby>場面<rt>ばめん</rt></ruby>では、
      「<ruby>慌<rt>あわ</rt></ruby>てても
      しかたない」の
      「ても」が
      ポイントです。
    </>
  ),
  blocks: [
    {
      label: "順接と逆接",
      text: (
        <>
          <ruby>順接<rt>じゅんせつ</rt></ruby>は、
          <ruby>前<rt>まえ</rt></ruby>の
          <ruby>内容<rt>ないよう</rt></ruby>が
          そのまま
          <ruby>自然<rt>しぜん</rt></ruby>に
          <ruby>次<rt>つぎ</rt></ruby>の
          <ruby>結果<rt>けっか</rt></ruby>へ
          つながる
          <ruby>言<rt>い</rt></ruby>い
          <ruby>方<rt>かた</rt></ruby>です。<ruby>英語<rt>えいご</rt></ruby>でいう"and"。
          いっぽう
          <ruby>逆接<rt>ぎゃくせつ</rt></ruby>は、
          <ruby>前<rt>まえ</rt></ruby>の
          <ruby>内容<rt>ないよう</rt></ruby>から
          <ruby>予想<rt>よそう</rt></ruby>される
          <ruby>流<rt>なが</rt></ruby>れに
          さからう
          <ruby>結果<rt>けっか</rt></ruby>を
          <ruby>出<rt>だ</rt></ruby>すときに
          <ruby>使<rt>つか</rt></ruby>います。<ruby>英語<rt>えいご</rt></ruby>でいう"but"。

          <span className="example-sequential">
            順接の例:
            「がんばったので
            3<ruby>位<rt>い</rt></ruby>になった」
            <br />
            がんばったことが、
            3<ruby>位<rt>い</rt></ruby>になった
            <ruby>理由<rt>りゆう</rt></ruby>として
            まっすぐ
            つながっています。
          </span>
          <span className="example-contrast">
            逆接の例:
            「がんばったのに
            3<ruby>位<rt>い</rt></ruby>になった」
            <br />
            「もっと
            いい
            <ruby>結果<rt>けっか</rt></ruby>に
            なってもよさそうなのに」
            という
            <ruby>気持<rt>きも</rt></ruby>ちが
            入ります。
          </span>
        </>
      ),
    },
    {
      label: "「ても」の意味",
      text: (
        <>
          「ても」は、
          この
          <ruby>逆接<rt>ぎゃくせつ</rt></ruby>を
          <ruby>事実<rt>じじつ</rt></ruby>ではなく、
          <ruby>仮定<rt>かてい</rt></ruby>として
          <ruby>言<rt>い</rt></ruby>う
          <ruby>形<rt>かたち</rt></ruby>です。
          つまり
          「AしてもBだ」は、
          「もしもAしたとしても、
          <ruby>結論<rt>けつろん</rt></ruby>は
          Bのまま
          <ruby>変<rt>か</rt></ruby>わらない」
          という
          <ruby>意味<rt>いみ</rt></ruby>です。
          <span className="example-box">
            例:
            「<ruby>慌<rt>あわ</rt></ruby>てても
            しかたない」
            <br />
            <ruby>慌<rt>あわ</rt></ruby>てるかどうかに
            かかわらず、
            <ruby>結果<rt>けっか</rt></ruby>は
            変わらない、
            という
            <ruby>判断<rt>はんだん</rt></ruby>です。
          </span>
        </>
      ),
    },
    {
      label: "「けど」「のに」「ても」の違い",
      text: (
        <>
          この
          <ruby>三<rt>みっ</rt></ruby>つは
          どれも
          <ruby>逆接<rt>ぎゃくせつ</rt></ruby>に
          <ruby>見<rt>み</rt></ruby>えますが、
          <ruby>前件<rt>ぜんけん</rt></ruby>を
          どう
          <ruby>扱<rt>あつか</rt></ruby>うかが
          ちがいます。
          「けど」は
          まず
          <ruby>事実<rt>じじつ</rt></ruby>を
          つなぐ
          <ruby>形<rt>かたち</rt></ruby>で、
          <ruby>話<rt>はなし</rt></ruby>の
          流れとして
          もっとも
          中立的です。
          「のに」は
          <ruby>話<rt>はな</rt></ruby>し
          <ruby>手<rt>て</rt></ruby>の
          <ruby>不満<rt>ふまん</rt></ruby>、
          <ruby>驚<rt>おどろ</rt></ruby>き、
          <ruby>残念<rt>ざんねん</rt></ruby>さが
          強く
          入ります。
          そして「ても」は、
          その
          <ruby>前件<rt>ぜんけん</rt></ruby>を
          <ruby>仮定<rt>かてい</rt></ruby>として
          置いても、
          <ruby>後件<rt>こうけん</rt></ruby>は
          変わらない、
          という
          <ruby>意味<rt>いみ</rt></ruby>を
          出します。
          <span className="example-box">
            「けど」の例:
            「<ruby>慌<rt>あわ</rt></ruby>てたけど、
            しかたないよね」
            <br />
            「もう慌てた」という
            <ruby>事実<rt>じじつ</rt></ruby>を
            受けて
            話しています。
          </span>
          <span className="example-box">
            「のに」の例:
            「<ruby>慌<rt>あわ</rt></ruby>てたのに、
            しかたないよね」
            <br />
            文として
            かなり
            ねじれていて、
            <ruby>不満<rt>ふまん</rt></ruby>や
            <ruby>違和感<rt>いわかん</rt></ruby>が
            強すぎるため、
            この場面では
            合いません。
          </span>

        </>
      ),
    },
  ],
  summary: (
    <>
      この
      「ても」は、
      「そうしても
      <ruby>結果<rt>けっか</rt></ruby>は
      <ruby>変<rt>か</rt></ruby>わらない」
      という
      <ruby>仮定的<rt>かていてき</rt></ruby>
      <ruby>逆接<rt>ぎゃくせつ</rt></ruby>を
      <ruby>表<rt>あらわ</rt></ruby>しています。
    </>
  ),
  note: (
    <>
      補足すると、「〜ても」には
      とりたて
      <ruby>助詞<rt>じょし</rt></ruby>の
      「も」が
      <ruby>入<rt>はい</rt></ruby>っているため、
      「ほかの
      <ruby>場合<rt>ばあい</rt></ruby>でも」
      という
      <ruby>広<rt>ひろ</rt></ruby>がりを
      感じさせやすいです。
      そのため、
      「わたしが
      たのんでも
      だめだった」は、
      「ほかの
      <ruby>人<rt>ひと</rt></ruby>が
      たのんでも
      だめで、
      わたしが
      たのんでも
      だめだった」
      のような
      含みを
      持つことがあります。
    </>
  ),
},
};

export default earthquakeQuiz;
