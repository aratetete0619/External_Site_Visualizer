## 🌐概要: 
このプロジェクトは、ユーザーがさまざまな関連性を視覚的に探求できるアプリケーションを構築します。ユーザーの検索に基づいて、映画やドラマのキャラクター間の関係図、ウェブサイトの外部リンク、芸能人の交流、あるいはテクノロジー間の結びつきといった「つながり」を視覚化します。ユーザーは、この関係図を直感的に操作し、その背後にある関連性の理由を理解することができます。さらに、作成した図は、共有やプレゼンテーションの資料作成に利用することも可能です。

## 🎯目的: 
全ての事象には何らかのつながりがあり、その可視化は事象を理解するための重要な要素です。ビジネス、人間関係、科学、歴史などのさまざまな領域で事象の相互作用や関連性を把握することで、より深い理解につながります。

## 🏗️背景(余談)
このアプリケーションは、私の長年の哲学への興味と、ITという革新的なテクノロジーとの間に存在する橋を架けることの可能性を探求するという独自の視点から誕生しました。私が社会で確立されている概念や制度の背後にある思想や理由を理解しようとする根源的な好奇心は、私がまだ子供の頃から持っていました。それはまた、人々が日々直面する現実の理解と解釈、さらにそれを改善しようという志向を形にする道を探す動機とも繋がっています。

それから私は一歩進んで、哲学的な思考とプログラミング、特にオブジェクト指向という概念を結びつける試みを始めました。オブジェクト指向の基本的な原理は、現実世界を独立したオブジェクトへと分割し、それぞれが固有の属性と振る舞いを持つという考え方を持っています。この考え方を哲学的視野に適用すると、存在するもの全てとの相互関係の理解に新たな視点をもたらす可能性があると確信しました。

そのような視野から、私はこのアプリケーションの制作に取り掛かろうと思いました。私の目指すところは、哲学的な視野とプログラミングの方法論がどのように結びつき、相互に影響を与え合うのかを示すことです。アプリケーションはただユーザーの問題を解決するためのツールであるだけではなく、哲学と科学が交わる場であり、それによって新たな視点や理解が生まれる可能性を秘めていると信じています。

## 👥ターゲット: 
1. 教育関係者：教師や学生は、教材や学習内容を視覚化し、理解を深めるためにこのアプリケーションを使用することができます。たとえば、歴史教師は重要な出来事の間の関連性を示すため、科学教師は科学的な概念やプロセスを説明するために関連図を使用することができます。

2. ビジネスパーソン：ビジネスパーソンは、企業間の関係、マーケットトレンド、競合分析などを視覚化するためにこのアプリケーションを活用できます。

3. リサーチャー/分析家：リサーチャーや分析家は、データや情報を視覚化し、複雑な関連性を理解しやすくするためにこのアプリケーションを使用することができます。

4. クリエイティブライター：物語のプロットやキャラクターの関係を視覚化することで、ストーリーテリングを助けるためにこのアプリケーションを利用することができます。

5. 自己啓発に興味がある個人：個人の思考や考えのパターン、人間関係、人生の出来事などを視覚化するためにこのアプリケーションを使用することができます。

6. ジャーナリスト: ジャーナリストは記事のリサーチ過程で、人物や組織の相互関連や時間的な出来事の流れを視覚化するためにこのツールを利用できます。

7. ソーシャルメディアマネージャー: ユーザーや投稿の間のインタラクションを視覚化し、コミュニティの動向やトレンドを理解するために利用できます。



## ⚙️主要機能:

1. **入力されたデータの関連の可視化**: ユーザーが入力したデータやキーワードに基づいて関連性のあるエンティティを探し出し、それらの関連性をグラフィカルに可視化します。

2. **インタラクティブな操作**: ユーザーは関連図のノードやエッジの追加、削除、編集を直感的に行うことができます。

3. **ドメインやサービスの自動判別と分類**: 入力されたデータに基づいて、それがどのドメインやサービスに関連しているのかを自動的に判別し、適切に分類します。

4. **機械学習モデルを利用した関連の抽出**: TensorFlowやKerasなどの機械学習ライブラリを活用して、テキストからエンティティとその関連性を抽出します。

5. **共有機能**: ユーザーが作成した関連図は簡単に共有することができ、他のユーザーやチームとのコラボレーションを促進します。

6. **リアルタイムアップデート**: ユーザーが作成した関連図は、新しい情報が利用可能になるとリアルタイムで更新されます。

7. **パーソナライズされたアラート**: ユーザーが特定のトピックやキーワードについて新しい関連性が見つかったときに通知を受け取ることができます。

8. **AIを活用した関連性の発見:**: GPTや他のML技術を活用して、テキスト中に暗黙的に存在する関連性を発見し、ユーザーに新たな視点や洞察を提供します。

9. **ソーシャルメディアの統合**: ユーザーが作成した関連図を直接ソーシャルメディアに共有できます。

10. **アクセシビリティ機能**: 色覚異常や視覚障害を持つユーザーでも利用できるよう、色の選択、コントラスト、フォントサイズなどの調整が可能なアクセシビリティ設定を提供します。


## 🛠️非機能要件:

1. **パフォーマンス**: アプリケーションは大量のデータを扱い、リアルタイムの情報更新を行うため、高速なデータ処理とレスポンス時間を保証する必要があります。

2. **スケーラビリティ**: ユーザー数やデータ量が増えたときにも、システムは安定して動作し続け、効率的にスケールアップできるように設計されていることが求められます。

3. **セキュリティ**: ユーザーデータのプライバシーを保護し、不正アクセスやデータ漏えいを防ぐための適切なセキュリティ対策が取られていることが必要です。

4. **可用性**: サービスは24時間365日稼働し、ダウンタイムが最小限に抑えられていることが求められます。

5. **維持管理性**: システムは簡単に更新や修正ができるように設計されていることが必要です。また、バグや問題が発生した場合に迅速に対応できるようなロギングとモニタリングの機能も必要です。

6. **ユーザビリティ**: インターフェースは直感的で使いやすく、全てのユーザーが必要な情報に簡単にアクセスできるようにすることが重要です。また、視覚障害者や色覚異常者でも利用できるよう、アクセシビリティの要件も考慮する必要があります。

7. **互換性**: アプリケーションは主要なウェブブラウザやデバイスで問題なく動作することが必要です。

8. **テスト可能性**: システムはテストしやすいように設計されており、ユニットテスト、統合テスト、エンドツーエンドテストが容易に実装できることが求められます。

9. **信頼性**: システムは高い信頼性を保つために、冗長性とリカバリ機能を有していることが必要です。

10. **拡張性**: システムは新機能の追加や既存機能の改善を容易にするため、モジュール性と拡張性を持っていることが求められます。

<br>

## 技術スタック

![System Architecture Diagram](https://showme.redstarplugin.com/s/QjNl601q)

### バックエンド開発環境:
- NLPライブラリ: spaCyとGINZA
- AutoMLライブラリ: AutoKeras、H2O、またはGoogle Cloud AutoML等
- 強化学習ライブラリ: OpenAI Gym、Ray RLlib等
- マシンラーニングライブラリ: TensorFlow、Keras
- マシンラーニングモデル: TransformerベースのGPT

### フロントエンド開発環境:

- ライブラリ: React.js
- 3D描画ライブラリ: Babylon.js
- プログラミング言語: TypeScript

### データベース:

- データベース管理システム: DynamoDB（ユーザーデータやその他の非グラフ型データを保存するため）
- グラフデータベース: Neo4j（エンティティ間の関連性を保存およびクエリするため

### 開発ツールおよびサービス:

- 検索エンジン: Elasticsearch
- データ可視化ツール: Kibana
- バージョン管理: Git
- コンテナ化: Docker
- コンテナオーケストレーション: Kubernetes

###  インフラストラクチャおよびデプロイメント:

- サーバーレスコンピューティングサービス: AWS Lambda
- API Gateway: AWS API Gateway
- 機械学習プラットフォーム: Amazon SageMaker
- ウェブクローリングとテキスト解析: Amazon EC2/ECS
- クラウドサービス: AWS

### API: 
- APIの設計とクエリ言語: GraphQL

### プロジェクト管理ツール:
- Jira Confluence

## 🤖アプリの挙動: 
以下に、アプリケーションのシステムのフローチャートを示します。この図は、ユーザーからの検索クエリがシステムを通過し、最終的に視覚的なデータとしてユーザーに表示されるまでのプロセスを示しています。


![システム構成図](https://showme.redstarplugin.com/s/CyqR9B7h)

1. **ユーザーインタラクション**: ユーザーがアプリケーションで何かを検索すると、そのリクエストはGraphQL APIを経由してバックエンドに送信されます。これにより、クライアントは必要なデータのみを指定してリクエストでき、サーバーの負荷を減らすことができます。ユーザビリティを改善するために、このインターフェースはシンプルで直感的なものにする必要があります。

2. **データの取得と解析**: Amazon EC2インスタンスが指定されたウェブページをクロールします。次に、spaCyとGINZAを使用してテキストからエンティティとその関係性を抽出します。このプロセスは、パフォーマンスを向上させるために最適化され、非同期処理を活用します。

3. **データの保存とインデックス化**: 抽出した情報はNeo4jとDynamoDBに保存されます。同時に、Elasticsearchは新たに抽出した情報をインデックス化し、素早い検索を可能にします。

4. **データの検索と取得**: ユーザーが特定のエンティティや関係性を探すと、GraphQL APIは適切な検索クエリをElasticsearchに送信します。Elasticsearchはその結果を返し、それがユーザーに表示されます。

5. **関係図の生成**: Three.jsとReact.jsを使用して、ユーザーに対してエンティティ間の関係図を動的に描画します。この処理はクライアント側で行われ、TypeScriptを使用してロジックが記述されます。これにより、サーバーの負荷を軽減し、ユーザーエクスペリエンスを向上させます。

6. **マシンラーニングによる予測**: Amazon SageMakerを使用して、エンティティ間の新たな関係性を予測します。これらの予測はデータベースに保存され、ユーザーが検索したときに結果として表示されます。

7. **フィードバックと改善**: ユーザーからのフィードバックはDynamoDBに保存され、システムの改善に使用されます。また、新たにクロールされたデータは定期的にSpacyに送られ、エンティティと関係性の抽出が行われます。

8. **モニタリング**: Elasticsearchの動作はKibanaでモニタリングされ、問題が発生した場合にはすぐに対応できるようにします。

9. **共有**: ユーザーは検索結果をソーシャルメディアで共有することができます。これにより、アプリケーションの認知度を高めることができます。


## つながり間に用いる手法
1. **相関係数 (Correlation Coefficient)**:
    - 芸能人のSNS投稿やインタビューの中で言及される名前や用語を解析し、芸能人間の関係性の強さを評価する
        - 使用技術: TensorFlow, Keras, spaCy, GINZA, Neo4j, GraphQL
        - 実装アイディア: spaCyとGINZAを使って芸能人のSNS投稿やインタビューから名前や用語を抽出し、TensorFlowやKerasでテキストデータの相関係数を計算。Neo4jを使って芸能人間の関係性を格納し、GraphQLでクエリして視覚化。 

2. **コサイン類似度 (Cosine Similarity)**:
    - 映画やドラマのキャラクターの台詞や行動をテキストベクトルとして表し、キャラクター間の類似性を測定する
    - あるいはウェブサイトのコンテンツのテキストベクトルを作成し、ウェブサイト間のコンテンツの類似性を測定する
        -  使用技術: TensorFlow, Keras, spaCy, GINZA, Three.js, React.js
        -  実装アイディア: spaCyとGINZAで映画やドラマのキャラクターの台詞や行動を抽出し、TensorFlowやKerasを使ってテキストベクトル間のコサイン類似度を計算。Three.jsとReact.jsでキャラクター間の類似性を視覚化。

3. **Jaccard係数 (Jaccard Index)**:
    - ウェブサイトの外部リンクや芸能人の共演情報などの共通要素を元にして、その間の類似性を測定する
        - 使用技術: Python, Neo4j, Three.js, React.js
        - 実装アイディア: Pythonを使用してウェブサイトの外部リンクや共演情報からJaccard係数を計算。Neo4jで関係性を格納し、Three.jsとReact.jsで視覚化。

4. **Dynamic Time Warping (DTW)**:
    - 複数の芸能人やテクノロジーの人気トレンドや発展を時系列データとして解析し、その間の類似性を評価する
        -  使用技術: Python, DynamoDB, Kibana, React.js
        -  実装アイディア: Pythonで時系列データを解析してDTWを計算。DynamoDBに結果を格納し、Kibanaでモニタリング、React.jsで視覚化。

5. **Levenshtein距離 (Levenshtein Distance)**:
    - 映画やドラマのキャラクター名やテクノロジーの名称などを解析し、名前の類似性に基づいて関連性を推測する
        - 使用技術: Python, Neo4j, React.js
        - 実装アイディア: Pythonでキャラクター名やテクノロジーの名称のLevenshtein距離を計算。Neo4jで関連性を格納し、React.jsで視覚化。

6. **Spearmanの順位相関**と**Kendallの順位相関**:
    - 映画やドラマのキャラクター、芸能人、テクノロジーなどの人気度や影響力を順位付けし、これらの順位間の関係性を分析する
        - 使用技術: Python, DynamoDB, React.js
        - 実装アイディア: Pythonで人気度や影響力を順位付けし、SpearmanやKendallの順位相関を計算。DynamoDBに結果を格納し、React.jsで視覚化。

7. **マシンラーニングモデル (TransformerベースのGPT)**:
    - 自然言語処理(NLP)の一環として、テキストデータからエンティティ間の関係性を自動的に抽出し、関係図を生成する
        - 使用技術: TensorFlow, Keras, Amazon SageMaker, React.js, Three.js
        - 実装アイディア: TensorFlowとKerasを使ってTransformerベースのGPTモデルを訓練し、テキストからエンティティ間の関連性を予測。Amazon SageMakerでモデルをデプロイし、React.jsとThree.jsで結果を視覚化。

8. **強化学習 (OpenAI Gym, Ray RLlib)**:
    - ユーザーがどのように関係図とインタラクションするかを学習し、関係図の表示や操作を最適化する
        - 使用技術: Neo4j, GraphQL, Three.js, React.js
        - 実装アイディア: Neo4jを使用してエンティティと関係性のグラフを作成。GraphQLでクエリし、Three.jsとReact.jsで関係グラフを視覚化。

## 最終的な自動運用戦略
1. **インクリメンタルラーニング機能の統合**:
    - アプリケーションは新しいデータに対して動的に学習できるようにする必要がある
    - バックエンドシステムは新たにクロールしたデータに対してNLP処理を行い、その結果を既存のモデルに統合できるようにする必要がある

2. **リアルタイムフィードバックシステムの構築**:
    - ユーザーからのフィードバックを取得するインターフェースを設計する必要がある
    - フィードバックは、AIモデルの学習データとして直接使用されるようにバックエンドに統合

3. **オートMLの導入**:
    - 自動機械学習（AutoML）ツールを選択し、システムに統合する必要がある
    - モデルの訓練、評価、選択のプロセスはこのツールを通じて自動化

4. **強化学習の採用**:
    - システムは特定の報酬に対する最適な戦略を学習する能力を持つ。
    - 強化学習アルゴリズムはユーザーインタラクションやその他のパフォーマンス指標に基づいて更新

5. **データのクオリティ管理システムの構築**:
    - 入力データのクオリティを監視するための仕組みを設ける必要がある
    - データのエラーや欠損値が検出された場合、それを修正または除去するための自動化されたプロセスが必要


## 無料　/有料プラン

### 無料プラン（Free Plan）:

- 基本的な検索機能：エンティティや関連性を検索する機能。
- 基本的な関係図：限定された範囲のエンティティ間の関係を視覚化。
- コミュニティへのアクセス：ユーザーが情報や意見を共有できるコミュニティへのアクセス。
- 広告表示：広告を表示することで、無料プランの運用費用を補ってください。

### 有料プラン（Premium Plan）:

- 高度な検索フィルタ：検索結果をさまざまな基準で絞り込むことができる高度なフィルタ。
- 拡張された関係図：より多くのエンティティとその関係性を視覚化する高度な関係図。
- エンティティの詳細情報：選択したエンティティに関する詳細な情報を提供。
- データエクスポート：関係図やエンティティのデータをCSV, JSONなどの形式でエクスポートする機能。
- 広告非表示：有料プランのユーザーには広告を表示しない。
- プライオリティサポート：優先的にカスタマーサポートを受けることができる。
- 定期的なデータ更新通知：新しいエンティティや関係性が追加されたときに通知を受け取る機能。


| 機能/プラン            | 無料プラン              | 有料プラン               | 技術                                         |
|---------------------|------------------------|------------------------|--------------------------------------------|
| 検索機能               | 基本的な検索             | 高度なフィルタ付きの検索   | Elasticsearch, GraphQL                    |
| 関係図の視覚化          | 制限された範囲の関係図       | 拡張された範囲の関係図       | Three.js, React.js                         |
| エンティティ詳細情報      | ❌                      | ⭕️                       | spaCy, GINZA, Neo4j                        |
| データのエクスポート      | ❌                      | ⭕️                       | バックエンドスクリプト (Python, Node.js)   |
| 広告表示               | ⭕️                      | ❌                       | Google AdSense等                           |
| プライオリティサポート    | ❌                      | ⭕️                       | カスタマーサポート管理システム              |
| データ更新通知          | ❌                      | ⭕️                       | 通知サービス (Firebase Cloud Messaging)    |
| コミュニティアクセス    | ⭕️ (基本的な機能)       | ⭕️ (全機能)               | ソーシャル機能プラットフォーム              |
| 関係図のカスタマイズ     | ❌                      | ⭕️                       | Three.js, React.js, ユーザー設定の保存 (DynamoDB) |
| APIリクエストの制限     | 制限あり (例: 1日100回) | 制限なし or 高い制限      | API Gateway のレート制限                    |


## 🏷️完成ロードマップ: 

### プロジェクト計画と準備

- プロジェクトの要件定義とスコープの洗い出し
- 技術スタックの確認とセットアップ
- 開発環境の構築とテスト
- プロジェクトのマイルストーンとタスクの定義

### バックエンドの基本構造の開発

- データの収集と解析のためのAWS Lambda関数の開発
- SpacyとGINZAを使ったNLP機能の開発
- Neo4jとDynamoDBを使ったデータの保存と管理システムの開発
- Elasticsearchを使ったデータのインデックス化と検索機能の開発
- GraphQL APIの設計と開発

### フロントエンドの基本構造の開発

-  Three.jsとReact.jsを使った可視化ツールの開発
- ユーザーインタフェースとエクスペリエンスの設計と開発
- サーバーからクライアントへのデータの結合と表示

### マシンラーニングの開発と統合

- TensorFlowとKerasを用いた予測モデルの開発とトレーニング
- GPTを用いたテキスト生成の開発
- マシンラーニングモデルをバックエンドとフロントエンドに統合

### アプリケーションのテストと修正

- ユニットテスト、統合テスト、エンドツーエンドテストの実行
- バグ修正とパフォーマンスの最適化
- ユーザビリティテストの実施とフィードバックの収集

### デプロイメントとドキュメンテーション

- アプリケーションのデプロイとパフォーマンスの監視
- ドキュメンテーションの作成とアップデート
- 最終的なテストとフィードバックの収集

## フィードバックのレビューと最終的な調整

アプリの構築が完了した後のフローは以下のようになります。

1. **モニタリングとメンテナンス:** アプリケーションは定期的に監視され、パフォーマンス、セキュリティ、ログエラーを確認します。このステップでは、KibanaとElasticsearchを使用してログを監視し、異常やパフォーマンスの問題を早期に検出します。

2. **ユーザーフィードバック:** Jira Confluenceを使用してユーザーフィードバックを収集し、必要な改善や新機能のリクエストを追跡します。また、バグ報告やトラブルシューティングのリクエストもこのフェーズで処理します。

3. **アップデートとバグ修正:** フィードバックとモニタリングに基づき、開発チームはアプリケーションのアップデートを行い、必要なバグ修正を実施します。これには、新機能の開発や既存の機能の改善も含まれます。

4. **新機能の開発:** アプリケーションは、ユーザーのニーズや業界のトレンドに応じて進化します。新機能の開発は、React.js, Three.js, TypeScriptを使用したフロントエンドとPython, spaCy, GINZAを使用したバックエンドで行われます。新たに導入される機械学習ライブラリや機能強化にはTensorFlow、Keras、そしてAmazon SageMakerなどが使用されます。

5. **新バージョンのデプロイ:** 新機能や修正が完了したら、アプリケーションの新バージョンをデプロイします。このステップでは、AWS Lambda, AWS API Gateway, Amazon EC2/ECS, AWSを使用してアプリケーションを本番環境にデプロイします。

6. **ユーザー通知とドキュメンテーションのアップデート:** 新機能やアップデートがリリースされたら、ユーザーに通知します。これには、アプリケーションのドキュメンテーションとヘルプセンターの情報を更新する作業も含まれます。

7. **ユーザーの利用と評価:** 最終的に、ユーザーは新しい機能や改善を利用し、その結果フィードバックを提供します。このフィードバックは再度、新たなアップデートやバグ修正のための入力となります。このフローは継続的に繰り返されます。
