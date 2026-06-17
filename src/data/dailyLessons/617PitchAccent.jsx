const lesson617PitchAccent = {
  id: "2026-06-17-pitch-accent",
  date: "2026-06-17",
  dateLabel: "2026年6月17日",
  title: (
    <>
      <ruby>発音<rt>はつおん</rt></ruby>
      <ruby>練習<rt>れんしゅう</rt></ruby>
    </>
  ),
  subtitle: (
    <>
      <ruby>単語<rt>たんご</rt></ruby>のピッチと
      <ruby>文末<rt>ぶんまつ</rt></ruby>イントネーションを
      <ruby>聞<rt>き</rt></ruby>き
      <ruby>分<rt>わ</rt></ruby>ける
    </>
  ),
  partner: "Avery",
  learningSections: [
    {
      id: "pitch-core",

      title: (
        <>
          <ruby>今日<rt>きょう</rt></ruby>の
          <ruby>発音<rt>はつおん</rt></ruby>ポイント
        </>
      ),
      description: (
        <>
          <ruby>日本語<rt>にほんご</rt></ruby>の
          <ruby>発音<rt>はつおん</rt></ruby>では、
          <ruby>英語<rt>えいご</rt></ruby>のように
          <ruby>音<rt>おと</rt></ruby>を
          <ruby>強<rt>つよ</rt></ruby>くするよりも、
          <ruby>音<rt>おと</rt></ruby>の
          <ruby>高<rt>たか</rt></ruby>さの
          <ruby>動<rt>うご</rt></ruby>きを
          <ruby>聞<rt>き</rt></ruby>くことが
          <ruby>大切<rt>たいせつ</rt></ruby>です。
        </>
      ),
      highlight: {
        label: "Focus",
        body: (
          <>
            <ruby>高<rt>たか</rt></ruby>さは「
            <ruby>上<rt>うえ</rt></ruby>」「
            <ruby>下<rt>した</rt></ruby>」の2
            <ruby>段階<rt>だんかい</rt></ruby>だけ。まずは
            <ruby>単語<rt>たんご</rt></ruby>の
            <ruby>中<rt>なか</rt></ruby>で
            <ruby>一度<rt>いちど</rt></ruby>
            <ruby>下<rt>さ</rt></ruby>がったら、そのあと
            <ruby>上<rt>あ</rt></ruby>がらないことを
            <ruby>覚<rt>おぼ</rt></ruby>えます。
          </>
        ),
      },
      items: [
        {
          id: "one-mora-one-dot",
          title: (
            <>
              1<ruby>音<rt>おん</rt></ruby>ごとに
              <ruby>点<rt>てん</rt></ruby>を
              <ruby>置<rt>お</rt></ruby>く
            </>
          ),
          body: (
            <>
              ピッチを
              <ruby>見<rt>み</rt></ruby>るときは、1
              <ruby>音<rt>おん</rt></ruby>=1モーラごとに
              <ruby>点<rt>てん</rt></ruby>を
              <ruby>置<rt>お</rt></ruby>きます。
              <ruby>長音<rt>ちょうおん</rt></ruby>「ー」や
              <ruby>小<rt>ちい</rt></ruby>さい「っ」も1つの
              <ruby>点<rt>てん</rt></ruby>として
              <ruby>数<rt>かぞ</rt></ruby>えます。
              <ruby>長音<rt>ちょうおん</rt></ruby>は
              <ruby>前<rt>まえ</rt></ruby>の
              <ruby>母音<rt>ぼいん</rt></ruby>とつながって
              <ruby>聞<rt>き</rt></ruby>こえますが、リズムでは1モーラとして
              <ruby>数<rt>かぞ</rt></ruby>えます。
            </>
          ),
          examples: [
            {
              text: <>かれは → か・れ・は</>,
              meaning: (
                <>
                  3つの
                  <ruby>点<rt>てん</rt></ruby>で
                  <ruby>見<rt>み</rt></ruby>る
                </>
              ),
            },
            {
              text: <>がくせい → が・く・せ・い</>,
              meaning: (
                <>
                  4つの
                  <ruby>点<rt>てん</rt></ruby>で
                  <ruby>見<rt>み</rt></ruby>る
                </>
              ),
            },
            {
              label: "長音",
              text: <>コーヒー → コ・ー・ヒ・ー</>,
              meaning: (
                <>
                  4モーラで
                  <ruby>見<rt>み</rt></ruby>る
                </>
              ),
              note: (
                <>
                  「コ・オ・ヒ・イ」と1
                  <ruby>音<rt>おん</rt></ruby>ずつ
                  <ruby>切<rt>き</rt></ruby>るのではなく、「コオ・ヒイ」のように
                  <ruby>次<rt>つぎ</rt></ruby>の
                  <ruby>母音<rt>ぼいん</rt></ruby>とつなげて
                  <ruby>読<rt>よ</rt></ruby>みます。
                </>
              ),
            },
            {
              label: "NG",
              text: <>コ・オ・ヒ・イ</>,
              meaning: <>1<ruby>音<rt>おん</rt></ruby>ずつ<ruby>切<rt>き</rt></ruby>りすぎ</>,
              tone: "danger",
            },
            {
              label: "NG",
              text: <>コ・ヒ</>,
              meaning: <><ruby>長音<rt>ちょうおん</rt></ruby>を<ruby>短<rt>みじか</rt></ruby>くしすぎ</>,
              tone: "danger",
            },
            {
              label: "OK",
              text: <>コオ・ヒイ</>,
              meaning: <><ruby>次<rt>つぎ</rt></ruby>の<ruby>母音<rt>ぼいん</rt></ruby>とつなげる</>,
              tone: "success",
            },

          ],

        },
        {
          id: "two-levels-only",
          title: (
            <>
              <ruby>英語<rt>えいご</rt></ruby>の stress と
              <ruby>日本語<rt>にほんご</rt></ruby>の pitch
            </>
          ),
          body: (
            <>
              <ruby>英語<rt>えいご</rt></ruby>では、
              <ruby>単語<rt>たんご</rt></ruby>の
              <ruby>中<rt>なか</rt></ruby>で
              <ruby>目立<rt>めだ</rt></ruby>つ
              <ruby>音<rt>おと</rt></ruby>を
              <ruby>強<rt>つよ</rt></ruby>く・
              <ruby>長<rt>なが</rt></ruby>く
              <ruby>読<rt>よ</rt></ruby>むことがあります。
              <ruby>日本語<rt>にほんご</rt></ruby>では、まず
              <ruby>声<rt>こえ</rt></ruby>の
              <ruby>強<rt>つよ</rt></ruby>さではなく、1
              <ruby>音<rt>おん</rt></ruby>ごとの
              <ruby>高<rt>たか</rt></ruby>さを
              <ruby>聞<rt>き</rt></ruby>きます。
            </>
          ),
          flowSteps: [
            {
              badge: "English stress → NG in Japanese",
              heading: (
                <>
                  <ruby>英語式<rt>えいごしき</rt></ruby>に
                  <ruby>読<rt>よ</rt></ruby>まない
                </>
              ),
              tone: "danger",
              sections: [
                {
                  label: "English",
                  title: <>TAble</>,
                  description: (
                    <>
                      TA を
                      <ruby>強<rt>つよ</rt></ruby>く・
                      <ruby>長<rt>なが</rt></ruby>く
                      <ruby>読<rt>よ</rt></ruby>む
                    </>
                  ),
                },
              ],
              note: (
                <>
                  <ruby>日本語<rt>にほんご</rt></ruby>で
                  <ruby>音<rt>おと</rt></ruby>が「
                  <ruby>上<rt>あ</rt></ruby>がる」とは、その
                  <ruby>音<rt>おと</rt></ruby>を
                  <ruby>強<rt>つよ</rt></ruby>く
                  <ruby>読<rt>よ</rt></ruby>むことではありません。
                </>
              ),
            },
            {
              badge: "Japanese pitch",
              heading: (
                <>
                  <ruby>日本語<rt>にほんご</rt></ruby>は
                  <ruby>高<rt>たか</rt></ruby>さを
                  <ruby>見<rt>み</rt></ruby>る
                </>
              ),
              description: <>テ・ー・ブ・ル</>,
              meaning: (
                <>
                  1モーラごとの
                  <ruby>高<rt>たか</rt></ruby>さを
                  <ruby>見<rt>み</rt></ruby>る
                </>
              ),
              note: (
                <>
                  <ruby>高<rt>たか</rt></ruby>い = 
                  <ruby>強<rt>つよ</rt></ruby>い ではない<br />
                  <ruby>低<rt>ひく</rt></ruby>い = 
                  <ruby>弱<rt>よわ</rt></ruby>い ではない
                </>
              ),
              tone: "success",
              pitchUnits: ["テ", "ー", "ブ", "ル"],
              pitchLevels: ["low", "high", "high", "high"],
            },
          ],
        },
        {
          id: "no-rise-after-drop",
          featured: true,
          title: (
            <>
              <ruby>一度<rt>いちど</rt></ruby>
              <ruby>下<rt>さ</rt></ruby>がったら
              <ruby>上<rt>あ</rt></ruby>がらない
            </>
          ),
          body: (
            <>
              <ruby>標準語<rt>ひょうじゅんご</rt></ruby>・
              <ruby>東京式<rt>とうきょうしき</rt></ruby>アクセントでは、
              <ruby>単語<rt>たんご</rt></ruby>の
              <ruby>中<rt>なか</rt></ruby>で
              <ruby>一度<rt>いちど</rt></ruby> low に
              <ruby>下<rt>さ</rt></ruby>がったら、そのあと high に
              <ruby>戻<rt>もど</rt></ruby>りません。
              <ruby>今日<rt>きょう</rt></ruby>はこのルールをいちばん
              <ruby>大事<rt>だいじ</rt></ruby>にします。
              <ruby>関西弁<rt>かんさいべん</rt></ruby>は
              <ruby>別<rt>べつ</rt></ruby>ルールなので、このページでは
              <ruby>扱<rt>あつか</rt></ruby>いません。
            </>
          ),
          examples: [
            {
              label: "OK",
              text: <>上→下→下</>,
              meaning: (
                <>
                  <ruby>一度<rt>いちど</rt></ruby>
                  <ruby>下<rt>さ</rt></ruby>がったあと、
                  <ruby>低<rt>ひく</rt></ruby>いまま
                  <ruby>続<rt>つづ</rt></ruby>く
                </>
              ),
              pitchUnits: ["め", "が", "ね"],
              pitchLevels: ["high", "low", "low"],
              movement: "falling",
            },
            {
              label: "OK",
              text: <>下→上→上</>,
              meaning: (
                <>
                  まだ
                  <ruby>下<rt>さ</rt></ruby>がっていないので、
                  <ruby>高<rt>たか</rt></ruby>いまま
                  <ruby>続<rt>つづ</rt></ruby>く
                </>
              ),
              pitchUnits: ["さ", "か", "な"],
              pitchLevels: ["low", "high", "high"],
              movement: "rising",
            },
            {
              label: "NG",
              text: <>上→下→上</>,
              meaning: (
                <>
                  <ruby>一度<rt>いちど</rt></ruby>
                  <ruby>下<rt>さ</rt></ruby>がったあとに
                  <ruby>戻<rt>もど</rt></ruby>らない
                </>
              ),
              tone: "danger",
              pitchUnits: ["あ", "い", "う"],
              pitchLevels: ["high", "low", "high"],
              movement: "neutral",
            },
          ],
        },
      ],
    },
    {
      id: "word-pitch",
      title: (
        <>
          <ruby>単語<rt>たんご</rt></ruby>のピッチを
          <ruby>見<rt>み</rt></ruby>てみる
        </>
      ),
      description: (
        <>
          まずは
          <ruby>文<rt>ぶん</rt></ruby>ではなく、
          <ruby>短<rt>みじか</rt></ruby>い
          <ruby>単語<rt>たんご</rt></ruby>だけでピッチを
          <ruby>見<rt>み</rt></ruby>ます。
          <ruby>大事<rt>だいじ</rt></ruby>なのは、どこで
          <ruby>下<rt>さ</rt></ruby>がるか、または
          <ruby>下<rt>さ</rt></ruby>がらないかです。
        </>
      ),
      items: [
        {
          id: "ame-rain",
          title: <><ruby>雨<rt>あめ</rt></ruby></>,
          body: <>「あ」のあとで<ruby>下<rt>さ</rt></ruby>がります。</>,
          reading: "",
          pitchUnits: ["あ", "め"],
          pitchLevels: ["high", "low"],

        },
        {
          id: "ame-candy",
          title: <><ruby>飴<rt>あめ</rt></ruby></>,
          body: <><ruby>単語<rt>たんご</rt></ruby>の<ruby>中<rt>なか</rt></ruby>では<ruby>下<rt>さ</rt></ruby>がりません。</>,
          reading: "",
          pitchUnits: ["あ", "め"],
          pitchLevels: ["low", "high"],

        },
        {
          id: "megane",
          title: <>めがね</>,
          body: <>「め」のあとで<ruby>下<rt>さ</rt></ruby>がり、そのあとは<ruby>低<rt>ひく</rt></ruby>いままです。</>,
          reading: "",
          pitchUnits: ["め", "が", "ね"],
          pitchLevels: ["high", "low", "low"],

        },
        {
          id: "sakana",
          title: <><ruby>魚<rt>さかな</rt></ruby></>,
          body: <><ruby>単語<rt>たんご</rt></ruby>の<ruby>中<rt>なか</rt></ruby>では<ruby>下<rt>さ</rt></ruby>がらず、<ruby>高<rt>たか</rt></ruby>いまま<ruby>続<rt>つづ</rt></ruby>きます。</>,
          reading: "",
          pitchUnits: ["さ", "か", "な"],
          pitchLevels: ["low", "high", "high"],

        },
        {
          id: "ringo",
          title: <>りんご</>,
          body: <>「り」のあとで<ruby>下<rt>さ</rt></ruby>がり、そのあとは<ruby>低<rt>ひく</rt></ruby>いままです。</>,
          reading: "りんご",
          pitchUnits: ["り", "ん", "ご"],
          pitchLevels: ["high", "low", "low"],
        },
        {
          id: "tamago",
          title: <>たまご</>,
          body: <><ruby>単語<rt>たんご</rt></ruby>の<ruby>中<rt>なか</rt></ruby>では<ruby>下<rt>さ</rt></ruby>がらず、<ruby>高<rt>たか</rt></ruby>いまま<ruby>続<rt>つづ</rt></ruby>きます。</>,
          reading: "たまご",
          pitchUnits: ["た", "ま", "ご"],
          pitchLevels: ["low", "high", "high"],
        },
      ],
    },
    {
      id: "sentence-final-intonation",
      title: (
        <>
          <ruby>文末<rt>ぶんまつ</rt></ruby>のイントネーション
        </>
      ),
      description: (
        <>
          <ruby>文末<rt>ぶんまつ</rt></ruby>が
          <ruby>下<rt>さ</rt></ruby>がると
          <ruby>平叙文<rt>へいじょぶん</rt></ruby>、
          <ruby>上<rt>あ</rt></ruby>がると
          <ruby>疑問文<rt>ぎもんぶん</rt></ruby>のように
          <ruby>聞<rt>き</rt></ruby>こえます。
        </>
      ),
      items: [
        {
          id: "kare-wa-gakusei-desu-pitch",
          title: <><ruby>彼<rt>かれ</rt></ruby>は<ruby>学生<rt>がくせい</rt></ruby>です。</>,
          body: <><ruby>文末<rt>ぶんまつ</rt></ruby>の「す」が<ruby>下<rt>さ</rt></ruby>がると、<ruby>言<rt>い</rt></ruby>い<ruby>切<rt>き</rt></ruby>りの<ruby>平叙文<rt>へいじょぶん</rt></ruby>として<ruby>聞<rt>き</rt></ruby>こえます。</>,
          category: "平叙文",
          tone: "statement",
          pitchUnits: ["か", "れ", "は", "が", "く", "せ", "い", "で", "す"],
          pitchLevels: ["low", "high", "high", "high", "high", "high", "high", "high", "low"],

        },
        {
          id: "kare-wa-gakusei-desu-ka-pitch",
          title: <><ruby>彼<rt>かれ</rt></ruby>は<ruby>学生<rt>がくせい</rt></ruby>ですか。</>,
          body: <><ruby>文末<rt>ぶんまつ</rt></ruby>の「か」が<ruby>上<rt>あ</rt></ruby>がると、<ruby>相手<rt>あいて</rt></ruby>に<ruby>答<rt>こた</rt></ruby>えを<ruby>求<rt>もと</rt></ruby>める<ruby>疑問文<rt>ぎもんぶん</rt></ruby>として<ruby>聞<rt>き</rt></ruby>こえます。</>,
          category: "疑問文",
          tone: "question",
          pitchUnits: ["か", "れ", "は", "が", "く", "せ", "い", "で", "す", "か"],
          pitchLevels: ["low", "high", "high", "high", "high", "high", "high", "high", "high", "high"],
        },
        {
          id: "kare-wa-gakusei-desu-ka-realization",
          title: <><ruby>彼<rt>かれ</rt></ruby>は<ruby>学生<rt>がくせい</rt></ruby>ですか。</>,
          body: <><ruby>文末<rt>ぶんまつ</rt></ruby>を<ruby>上<rt>あ</rt></ruby>げずに<ruby>下<rt>さ</rt></ruby>げる、または<ruby>軽<rt>かる</rt></ruby>く<ruby>平<rt>たい</rt></ruby>らに<ruby>言<rt>い</rt></ruby>うと、「ああ、<ruby>学生<rt>がくせい</rt></ruby>なんですね」という<ruby>納得<rt>なっとく</rt></ruby>・<ruby>確認<rt>かくにん</rt></ruby>の<ruby>感<rt>かん</rt></ruby>じになります。</>,
          category: "納得・確認",
          tone: "confirm",
          pitchUnits: ["か", "れ", "は", "が", "く", "せ", "い", "で", "す", "か"],
          pitchLevels: ["low", "high", "high", "high", "high", "high", "high", "high", "high", "low"],

        },
        {
          id: "ashita-kimasu-comparison-pitch",
          title: <>あした<ruby>来<rt>き</rt></ruby>ます。 / あした<ruby>来<rt>き</rt></ruby>ますか。</>,
          body: <><ruby>同<rt>おな</rt></ruby>じ<ruby>内容<rt>ないよう</rt></ruby>でも、<ruby>文末<rt>ぶんまつ</rt></ruby>の<ruby>上<rt>あ</rt></ruby>げ<ruby>下<rt>さ</rt></ruby>げで<ruby>聞<rt>き</rt></ruby>こえ<ruby>方<rt>かた</rt></ruby>が<ruby>変<rt>か</rt></ruby>わります。</>,

          comparisons: [
            {
              label: "平叙文",
              text: <>あした<ruby>来<rt>き</rt></ruby>ます。</>,
              pitchUnits: ["あ", "し", "た", "き", "ま", "す"],
              pitchLevels: ["low", "high", "high", "high", "high", "low"],
            },
            {
              label: "疑問文",
              text: <>あした<ruby>来<rt>き</rt></ruby>ますか。</>,
              pitchUnits: ["あ", "し", "た", "き", "ま", "す", "か"],
              pitchLevels: ["low", "high", "high", "high", "high", "high", "high"],
            },
          ],
        },
      ],
    },
    {
      id: "accent-dictionary",
      title: (
        <>
          アクセントを
          <ruby>自分<rt>じぶん</rt></ruby>で
          <ruby>調<rt>しら</rt></ruby>べる
        </>
      ),

      items: [
        {
          id: "ojad-reference",
          title: <>OJAD を<ruby>使<rt>つか</rt></ruby>う</>,
          body: (
            <>
              OJAD は、
              <ruby>日本語<rt>にほんご</rt></ruby>
              <ruby>教師<rt>きょうし</rt></ruby>・
              <ruby>学習者<rt>がくしゅうしゃ</rt></ruby>
              <ruby>向<rt>む</rt></ruby>けのオンライン
              <ruby>日本語<rt>にほんご</rt></ruby>アクセント
              <ruby>辞書<rt>じしょ</rt></ruby>です。
              <ruby>単語<rt>たんご</rt></ruby>のアクセントや、
              <ruby>文<rt>ぶん</rt></ruby>のピッチパターンを
              <ruby>確認<rt>かくにん</rt></ruby>できます。わからない
              <ruby>単語<rt>たんご</rt></ruby>が
              <ruby>出<rt>で</rt></ruby>てきたら、まずここで
              <ruby>調<rt>しら</rt></ruby>べてみましょう。
            </>
          ),
          link: {
            label: "OJADを開く",
            href: "https://www.gavo.t.u-tokyo.ac.jp/ojad/jpn/pages/home",
          },
        },
      ],
    },
  ],
  mistakes: [
    
    {
      id: "question-falling-final",
      label: <></>,
      saidLabel: (
        <>
          <ruby>注意<rt>ちゅうい</rt></ruby>する
          <ruby>文末<rt>ぶんまつ</rt></ruby>
        </>
      ),
      naturalLabel: (
        <>
          <ruby>自然<rt>しぜん</rt></ruby>な
          <ruby>文末<rt>ぶんまつ</rt></ruby>
        </>
      ),
      said: <></>,
      natural: <></>,
      point: (
        <>
          
        </>
      ),
    },
  ],
  messageFromRyuta: (
    <>

    </>
  ),

  
};

export default lesson617PitchAccent;
