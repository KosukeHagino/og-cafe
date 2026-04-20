# OG cafe

架空のカフェ「OG cafe」のサイトです。
<!-- 実務での保守・運用を見据えた設計をテーマに、前職の設計経験を活かした論理的な構造と、BEMやCSS変数などの効率的なコーディング手法を組み合わせて制作しています。 -->

## 🌐 Webサイト
[Webサイトを見る](https://KosukeHagino.github.io/og-cafe/)

## 🛠 使用技術・ツール
### Coding
- **HTML5**: セマンティックなマークアップ、アクセシビリティ（WAI-ARIA）への配慮
- **CSS3**: BEM設計、CSSカスタムプロパティ（変数）、論理プロパティ、Clamp関数
- **JavaScript**: Vanilla JS（スクロール演出、DOM操作）、Lenis（Smooth Scroll）

### Design & Tools
- **Design**: Figma / Photoshop
- **Workflow**: Git / SourceTree / GitHub / VS Code

## ✨ こだわり・実装ポイント
- **BEMによるコンポーネント設計**: 拡張性とメンテナンス性の高いクラス命名。
- **パフォーマンス最適化**: 全ての画像をWebP形式で管理し、処理速度を意識。
- **アクセシビリティ**: スクリーンリーダー利用者を想定した適切なタグ選定と状態管理（aria属性）。
- **設計思考の転用**: 12年間の機械設計で培った機能に基づくレイアウトの考え方をUI/UXに適用。

## 📂 ディレクトリ構造
.
├── index.html                # トップページ
├── css/                      # BEMに基づいたCSS管理
├── js/                       # JavaScriptファイル
└── img/                      # WebP形式に最適化された画像資産

## 🚀 セットアップ
ローカル環境で確認する場合は、以下の手順を実行してください。

```bash
git clone [https://github.com/KosukeHagino/og-cafe.git](https://github.com/KosukeHagino/og-cafe.git)
cd portfolio
# VS CodeのLive Server等でindex.htmlを開いてください
