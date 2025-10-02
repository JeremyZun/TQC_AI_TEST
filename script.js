// 題目資料 - 包含所有72道題目
const questions = [
    // 第一類：AI 發展歷程與生態系 (1-01 ~ 1-36)
    {
        id: "1-01",
        category: 1,
        text: "由於智慧一詞難以被定義，因此科學家在1950年代提出了一種測試機器是否具有智慧的方式：若機器所表現的行為能不被辨識出其身分，則稱這台機器是具有智慧。此測試的名稱為下列哪一項？",
        options: [
            "(A) 圖靈 (Turing) 測試",
            "(B) 戈拉 (Gola) 測試",
            "(C) 高斯 (Gauss) 測試",
            "(D) 馮紐曼 (Von Neumann) 測試"
        ],
        correctAnswer: 0,
        explanation: "在 1950 年代，電腦科學之父艾倫·圖靈（Alan Turing）提出了一個測試，用來判斷機器是否具有智慧。這個測試的名稱就是圖靈測試（Turing Test）。"
    },
    {
        id: "1-02",
        category: 1,
        text: "在1980年代，名為專家系統的人工智慧程式開始被許多公司所採用。請問專家系統的主要觀念為下列哪一項？",
        options: [
            "(A) 模仿專家對特定問題進行學習的系統，主要元件為機器學習模組",
            "(B) 針對特定領域的問題進行回答，主要元件為知識庫與推理機",
            "(C) 能夠自己強迫的問題進行回答的人工智慧，主要元件為機器學習模組與推理機",
            "(D) 針對廣泛的問題進行回答的人工智慧，主要元件為知識庫與機器學習模組"
        ],
        correctAnswer: 1,
        explanation: "專家系統是 1980 年代開始被廣泛採用的一種人工智慧程式。它的主要概念是針對特定領域的問題進行回答。其核心元件包含知識庫（存放專業領域的知識）和推論引擎（根據知識庫進行推理）。"
    },
    {
        id: "1-03",
        category: 1,
        text: "電腦科學家對人工智能的智慧等級進行了數個分類。其中，若人工智能能夠達到模仿人類解決特定問題的功能，則此人工智慧屬於下列哪一項？",
        options: [
            "(A) 強人工智慧",
            "(B) 弱人工智慧",
            "(C) 混合式人工智慧",
            "(D) 衍生式人工智慧"
        ],
        correctAnswer: 1,
        explanation: "弱人工智慧（Weak AI）或稱狹義人工智慧，指的是能夠模仿人類在特定問題上表現出的解決能力。這種 AI 不具備真正的推理或思考能力，只能在被設定的範圍內執行任務。"
    },
    {
        id: "1-04",
        category: 1,
        text: "造成現今人工智慧蓬勃發展的原因是由於支援人工智慧所需要的技術以及產業鏈逐漸完整。目前人工智慧中發展最蓬勃的一支為機器學習。由於機器學習需要大量的訓練資料來訓練其模型，因此收集資料是一件非常重要的事情。下列哪一項是可以讓我們方便收集大量資料的技術？",
        options: [
            "(A) 支援影像處理運算的硬體",
            "(B) 雲端服務的普及",
            "(C) 大數據系統以及技術",
            "(D) 人工智慧理論的突破"
        ],
        correctAnswer: 1,
        explanation: "機器學習是目前人工智慧發展最蓬勃的分支之一，特別是深度學習。由於深度學習需要大量的訓練資料來訓練模型，因此能夠方便地收集大量資料的技術至關重要。雲端服務的普及讓使用者能夠將大量的資料儲存在雲端，並利用雲端強大的運算能力來訓練模型，因此是讓深度學習能夠廣泛應用的重要技術。"
    },
    {
        id: "1-05",
        category: 1,
        text: "造成現今人工智慧蓬勃發展的原因是由於支援人工智慧所需要的技術以及產業鏈逐漸完整。目前人工智慧中發展最蓬勃的一支為機器學習。由於機器學習需要大量的訓練資料來訓練其模型，因此能夠針對大量收集到的資料進行處理，以及觀察是一件非常重要的事情。下列哪一項是可以讓我們能夠快速地處理大量資料？",
        options: [
            "(A) 支援影像處理運算的硬體",
            "(B) 雲端服務的普及",
            "(C) 大數據系統以及技術",
            "(D) 人工智慧理論的突破"
        ],
        correctAnswer: 2,
        explanation: "機器學習模型需要大量的訓練資料。為了能夠即時處理這些龐大的資料，大數據系統與技術是不可或缺的。這些技術能有效地處理資料的收集、儲存和處理，進而支撐機器學習的運作。"
    },
    {
        id: "1-06",
        category: 1,
        text: "現代所謂的人工智慧具有由許多演算法所組成的統稱。下列哪一項不屬於人工智慧領域中知名的計算技術的一環？",
        options: [
            "(A) 機器學習 (Machine Learning)",
            "(B) 演化計算 (Evolutionary Computation)",
            "(C) 資料探勘 (Data Mining)",
            "(D) 雲端運算 (Cloud Computing)"
        ],
        correctAnswer: 3,
        explanation: "人工智慧包含了許多演算法，例如機器學習、演化計算和資料探勘。雲端運算雖然提供了強大的運算資源，是 AI 發展的重要基礎，但它本身是一種基礎設施服務，不屬於人工智慧領域的演算法。"
    },
    {
        id: "1-07",
        category: 1,
        text: "造成現今人工智慧蓬勃發展的原因是由於支援人工智慧所需要的技術以及產業鏈逐漸完善。目前人工智慧中發展最蓬勃的一支為機器學習。其中又以類神經網路為基礎的深度學習，在近期內讓許多以往用機器學習來解決問題的表現又更上一層樓，廣泛地被應用在各種領域上。下列哪一項是讓我們可以在各種領域上廣泛地佈建深度學習模型的技術？",
        options: [
            "(A) 支援影像處理運算的硬體",
            "(B) 雲端服務的普及",
            "(C) 大數據系統以及技術",
            "(D) 人工智慧理論的突破"
        ],
        correctAnswer: 0,
        explanation: "深度學習之所以能廣泛應用，是因為有支援影像處理運算的硬體。這些硬體（例如 GPU 和 TPU）能處理大量的計算，是深度學習得以快速發展的關鍵技術。"
    },
    {
        id: "1-08",
        category: 1,
        text: "在人工智慧的發展上，自從 1986 年類神經網路中的倒傳遞學習演算法 (Backward Propagation) 被重新發明來作為分水嶺，則人工智慧學者後期主要的方法與思路為下列哪一項？",
        options: [
            "(A) 基於規則(Rule-based)的方法",
            "(B) 基於統計的方法",
            "(C) 屬於資料結構的方法",
            "(D) 基於經驗法則 (Trial-and-Error) 的方法"
        ],
        correctAnswer: 1,
        explanation: "儘管 1986 年倒傳遞學習演算法的出現是一個重要突破，但人工智慧的發展仍面臨許多挑戰。當時 AI 學者感到失望的原因之一，是因為人工智慧的方法仍基於統計的方法。而基於規則的方法則是專家系統的特點，並非導致倒傳遞學習演算法效果不佳的原因。"
    },
    {
        id: "1-09",
        category: 1,
        text: "1970 年代初，人工智慧首次遇到瓶頸，很多當代最厲害的人工智慧都只能解決某些問題中最簡單的部分，使得許多人對於人工智慧的成效感到失望。其原因不包含下列哪一項？",
        options: [
            "(A) 基礎理論的不完備",
            "(B) 許多問題的計算複雜度成指數成長",
            "(C) 許多倫理道德的問題讓大家懼怕人工智慧",
            "(D) 硬體計算能力不夠強"
        ],
        correctAnswer: 2,
        explanation: "1970 年代初，人工智慧首次遇到瓶頸，很多當代最厲害的人工智慧都只能解決某些問題中最簡單的部分，使得許多人對於人工智慧的成效感到失望。其原因包括基礎理論的不完備、許多問題的計算複雜度成指數成長、硬體計算能力不夠強，但不包括倫理道德的問題。"
    },
    {
        id: "1-10",
        category: 1,
        text: "電腦科學家對人工智慧的智慧等級進行了數個分類。其中，若人工智慧能夠達到與人員有相同的推理、思考、解決問題的能力，則此人工智慧屬於下列哪一項？",
        options: [
            "(A) 強人工智慧",
            "(B) 弱人工智慧",
            "(C) 混和式人工智慧",
            "(D) 仿生式人工智慧"
        ],
        correctAnswer: 0,
        explanation: "強人工智慧（Strong AI），又稱為通用人工智慧，是指能夠達到與人類具有相同的推理、思考和解決問題的能力。這與弱人工智慧（只能在特定任務上表現出智慧）形成對比。"
    },
    {
        id: "1-11",
        category: 1,
        text: "雲端運算就如同水電公共服務，將運算資源當成一種公共服務供給大家使用，只要有連結網路的設備都能使用運算資源。根據不同的服務，雲端運算分為 IaaS (Infrastructure as a Service)、SaaS (Software as a Service)、PaaS (Platform as a Service)。請問 Google 的線上文書服務屬於下列哪一種？",
        options: [
            "(A) IaaS",
            "(B) SaaS",
            "(C) PaaS",
            "(D) IaaS、SaaS、PaaS 皆有"
        ],
        correctAnswer: 1,
        explanation: "雲端運算提供多種服務模式，其中 SaaS (Software as a Service) 是指將軟體作為服務提供給使用者。Google 的線上文書服務（如 Google Docs）允許使用者直接在雲端上使用應用程式，無需在本地端安裝，因此屬於 SaaS。"
    },
    {
        id: "1-12",
        category: 1,
        text: "Amazon EC2 藉由提供 Web 服務的方式讓使用者可以彈性地執行自己的 Amazon 機器映像檔，使用者可以在這個虛擬機器上運行任何自己想要的軟體或應用程式。請問此種雲端服務屬於下列哪一項？",
        options: [
            "(A) IaaS (Infrastructure as a Service)",
            "(B) SaaS (Software as a Service)",
            "(C) PaaS (Platform as a Service)",
            "(D) IaaS、SaaS、PaaS 皆有"
        ],
        correctAnswer: 0,
        explanation: "IaaS (Infrastructure as a Service)提供了基礎的雲端基礎設施服務。Amazon EC2 就是一個典型的 IaaS 服務，它提供虛擬機器，讓使用者能夠在上面自由運行任何自己想要的軟體或應用程式。"
    },
    {
        id: "1-13",
        category: 1,
        text: "在 Google Cloud Platform (GCP) 上有一個 Google App Engine 的服務。在 Google APP Engine 的環境中，使用者不需要維護伺服器，只需要將網路應用程式上傳，然後其他的使用者就可以使用該應用程式所提供的服務。請問 Google App Engine 屬於下列哪一項？",
        options: [
            "(A) IaaS (Infrastructure as a Service)",
            "(B) SaaS (Software as a Service)",
            "(C) PaaS (Platform as a Service)",
            "(D) IaaS、SaaS、PaaS 皆有"
        ],
        correctAnswer: 2,
        explanation: "PaaS (Platform as a Service) 提供了一個開發平台，讓使用者可以在上面部署應用程式，而無需管理底層的伺服器。Google App Engine 的服務模式就是如此。"
    },
    {
        id: "1-14",
        category: 1,
        text: "某公司在創立初期由於成本因素，選擇了 Google Cloud Platform 來建立該公司的系統架構。並且部署該公司的服務在其上進行營運。請問 Google Cloud Platform 屬於下列哪一種？",
        options: [
            "(A) 公有雲 (Public Cloud)",
            "(B) 私有雲 (Private Cloud)",
            "(C) 社區雲 (Community Cloud)",
            "(D) 混合雲 (Hybrid Cloud)"
        ],
        correctAnswer: 0,
        explanation: "公有雲（Public Cloud）是由雲端服務供應商（如 Google）提供，並開放給大眾使用的雲端平台。任何個人或公司都可以租用其服務來建立和運行自己的系統架構。"
    },
    {
        id: "1-15",
        category: 1,
        text: "許多學校單位自行擁有機房並架設自己的雲端平台，且具有自己的資訊管理人員來管理。為了因應校內學生以及職員於辦公的需要，這類的雲端平台提供了相對應的服務。請問這種作法屬於下列哪一種？",
        options: [
            "(A) 公有雲 (Public Cloud)",
            "(B) 私有雲 (Private Cloud)",
            "(C) 社區雲 (Community Cloud)",
            "(D) 混合雲 (Hybrid Cloud)"
        ],
        correctAnswer: 1,
        explanation: "私有雲（Private Cloud）是由單一組織自行擁有並管理的雲端平台。這種雲端平台的伺服器通常架設在組織自己的機房內，只有內部人員才能使用。"
    },
    {
        id: "1-16",
        category: 1,
        text: "許多大的公司有自己的機房，並在其機房架設雲端平台來進行對內或對外的服務的營運。另外，同時也租用了類似 Google Cloud Platform 的雲端系統來應付需求增加時的流量。請問此種架構屬於下列哪一種？",
        options: [
            "(A) 公有雲 (Public Cloud)",
            "(B) 私有雲 (Private Cloud)",
            "(C) 社群雲 (Community Cloud)",
            "(D) 混合雲 (Hybrid Cloud)"
        ],
        correctAnswer: 3,
        explanation: "混合雲（Hybrid Cloud）結合了私有雲（企業自有）和公有雲（租用外部服務）的架構。這種模式允許企業在保有內部機房的同時，也能利用公有雲來應付突發的需求增加。"
    },
    {
        id: "1-17",
        category: 1,
        text: "在雲端運算的技術中，能夠將資源（包含 CPU、硬碟、記憶體甚至機器）自由且彈性地依照使用者的需求分配給他們所需要的運算資源。例如說，使用者可以要求 10 個運算單元、每一個各有 2 個 CPU、38G 大小的 RAM 以及 2T 的硬碟。請問該功能是利用下列哪一種技術達到的？",
        options: [
            "(A) 虛擬化技術",
            "(B) 分散式運算技術",
            "(C) 最佳化技術",
            "(D) 互動式技術"
        ],
        correctAnswer: 0,
        explanation: "虛擬化技術（Virtualization）是一種能將硬體資源（如 CPU、硬碟、記憶體）進行自由且彈性地分配的技術。這讓使用者可以根據需求隨時增加或減少運算資源，從而提高硬體使用效率。"
    },
    {
        id: "1-18",
        category: 1,
        text: "近幾年，容器 (Container) 技術快速成長，再加上新興雲端原生應用的普及化，虛擬化技術不再是企業 IT 架構轉型的唯一選擇，輕薄短小的容器比起傳統的虛擬器技術，更受到效能導向企業的青睞。請問下列哪一種不為容器相關技術？",
        options: [
            "(A) Kubernetes",
            "(B) Amazon ECS",
            "(C) Spark",
            "(D) Docker"
        ],
        correctAnswer: 2,
        explanation: "容器（Container）技術是一種輕量級的虛擬化技術。Kubernetes、Amazon ECS 和 Docker 都是與容器相關的技術。而 Spark 則是一個大數據處理框架，不屬於容器相關技術。"
    },
    {
        id: "1-19",
        category: 1,
        text: "大數據這個概念被提出時，專家學者普遍認為目前資料有著 4V 的特性，使得傳統的資料庫以及資料處理方式無法有效率地處理。請問「Facebook 需要從每天產生的 130TB 的 log 中作分析」現象是 4V 中的哪一種？",
        options: [
            "(A) Volume",
            "(B) Velocity",
            "(C) Variety",
            "(D) Veracity"
        ],
        correctAnswer: 0,
        explanation: "大數據有四個 V 特性：資料量 (Volume)、速度 (Velocity)、多樣性 (Variety) 和真實性 (Veracity)。Facebook 每天產生 130TB 的日誌資料，這指的是資料量非常龐大，因此符合 Volume 的特徵。"
    },
    {
        id: "1-20",
        category: 1,
        text: "大數據這個概念被提出時，專家學者普遍認為目前資料有著 4V 的特性，使得傳統的資料庫以及資料處理方式無法有效率地處理。請問「Google 平均每秒處理 40000 個查詢」現象是 4V 中的哪一種？",
        options: [
            "(A) Volume",
            "(B) Velocity",
            "(C) Variety",
            "(D) Veracity"
        ],
        correctAnswer: 1,
        explanation: "Google 平均每秒處理 40,000 個查詢，這描述了資料處理的速度非常快。因此，這個現象符合大數據速度 (Velocity) 的特徵。"
    },
    {
        id: "1-21",
        category: 1,
        text: "大數據這個概念被提出時，專家學者普遍認為目前資料有著 4V 的特性，使得傳統的資料庫以及資料處理方式無法有效率地處理。請問「Instagram 屬於文字、照片、影片、即時動態中分析目前大家最關注的主題」現象是 4V 中的哪一種？",
        options: [
            "(A) Volume",
            "(B) Velocity",
            "(C) Variety",
            "(D) Veracity"
        ],
        correctAnswer: 2,
        explanation: "Instagram 的資料包含文字、照片、影片等多種形式。這種多樣化的資料來源符合大數據多樣性 (Variety) 的特徵。"
    },
    {
        id: "1-22",
        category: 1,
        text: "在面對大數據的挑戰時，第一個要考慮的就是如何將數據從來源端收集到資料庫中以便處理。因為產生資料的速度很快遠而且可能來自眾多來源，因此必須在大數據系統中佈建一個訊息序列(Message Queue)的叢集來作為收集資料和處理資料之間的中介系統。請問下列哪一項不為訊息行列？",
        options: [
            "(A) Kafka",
            "(B) RabbitMQ",
            "(C) Google PubSub",
            "(D) Amazon EC2"
        ],
        correctAnswer: 3,
        explanation: "為了處理來自多個來源的大量資料，訊息序列（Message Queue）是一種常見的自動化數據收集和處理模式。Kafka、RabbitMQ 和 Google PubSub 都是常見的訊息序列應用。而 Amazon EC2 則是提供虛擬伺服器的雲端服務，不屬於訊息序列的應用。"
    },
    {
        id: "1-23",
        category: 1,
        text: "大數據的系統通常依照處理資料的需求分成批次處理(如:Hadoop 中的 MapReduce)和即時處理(如:Apache Storm、Apache Spark-Streaming)。請問對於一個批次系統而言，下列哪一個效能指標不適合用來評量批次系統？",
        options: [
            "(A) 健全性(Robustness)",
            "(B) 高吞吐量(High Throughput)",
            "(C) 低延遲(Low Latency)",
            "(D) 可以處理數據的規模(Scale)"
        ],
        correctAnswer: 2,
        explanation: "大數據系統的效能指標根據處理方式有所不同。對於批次處理系統（如 Hadoop 中的 MapReduce），主要看重健全性、高吞吐量和可擴展性。而低延遲（Low Latency）則更適用於衡量即時處理系統的效能，不適合用來評量批次系統。"
    },
    {
        id: "1-24",
        category: 1,
        text: "關聯式資料庫主要被調整用於執行規模小而讀寫頻繁，或者大批次極少存取的工作。而對於處理大數據方面，效能則表現不佳(如為大量文件建立索引、...等等)。NoSQL 則為了解決此問題而產生的。其資料儲存可以不需要固定的表格模式，也具有高度可以延伸的特徵。請問下列何者不為 NoSQL？",
        options: [
            "(A) MongoDB",
            "(B) MariaDB",
            "(C) Redis",
            "(D) HBase"
        ],
        correctAnswer: 1,
        explanation: "NoSQL 資料庫的產生是為了應對大數據的挑戰，它們不需要固定的表格模式，並具有高度可擴展性。MongoDB、Redis 和 HBase 都是 NoSQL 資料庫。MariaDB 則是一種關聯式資料庫，使用固定的表格模式。"
    },
    {
        id: "1-25",
        category: 1,
        text: "在選擇 NoSQL 建構大數據系統時，會依照應用的不同而有不同的策略。請問「建構 LinkedIn 上使用者與使用者之間的連結 (Connection) 關係」情境下列哪一項最適用？",
        options: [
            "(A) MongoDB",
            "(B) Redis",
            "(C) Neo4j",
            "(D) HBase"
        ],
        correctAnswer: 2,
        explanation: "Neo4j 是一種圖形資料庫，最適合處理節點與節點之間連結關係的應用。LinkedIn 上使用者之間的關係就是典型的圖形資料庫應用情境。"
    },
    {
        id: "1-26",
        category: 1,
        text: "在選擇 NoSQL 建構大數據系統時，會依照應用的不同而有不同的策略。請問「儲存各自文字、圖片、連結的部落格貼文」情境下列哪一項最適用？",
        options: [
            "(A) MongoDB",
            "(B) Redis",
            "(C) Neo4j",
            "(D) HBase"
        ],
        correctAnswer: 0,
        explanation: "MongoDB 是一種文件導向資料庫。它以文件的形式儲存資料，非常適合用來儲存包含文字、圖片、連結等多種不同資料形式的部落格貼文。"
    },
    {
        id: "1-27",
        category: 1,
        text: "在選擇 NoSQL 建構大數據系統時，會依照應用的不同而有不同的策略。請問「增加線上遊戲瀏覽效率，使得應用者操作過程不用等待資料讀寫的延遲」情境下列哪一項最適用？",
        options: [
            "(A) MongoDB",
            "(B) Redis",
            "(C) Neo4j",
            "(D) HBase"
        ],
        correctAnswer: 1,
        explanation: "Redis 是一種記憶體內存（in-memory）資料庫，以其極高的讀寫速度而聞名。這種特性非常適合需要快速響應、降低延遲的線上遊戲等應用。"
    },
    {
        id: "1-28",
        category: 1,
        text: "在選擇 NoSQL 建構大數據系統時，會依照應用的不同而有不同的策略。請問「某電子郵件供應商儲存高達 120TB 的所有人的郵件」情境下列哪一項最適用？",
        options: [
            "(A) MongoDB",
            "(B) Redis",
            "(C) Neo4j",
            "(D) HBase"
        ],
        correctAnswer: 3,
        explanation: "HBase 是一種面向列的 NoSQL 資料庫，其設計優勢在於處理巨量資料的讀寫。因此，對於儲存高達 120TB 的郵件這類大規模資料，HBase 是最適合的選擇。"
    },
    {
        id: "1-29",
        category: 1,
        text: "現在有許多企業開始進行與人工智慧有關的業務，籌組企業人工智慧團隊，最典型的角色不包含下列哪一項？",
        options: [
            "(A) 機器學習科學家 (Machine Learning Scientist)",
            "(B) 資料科學家 (Data Scientist)",
            "(C) 銷售人員 (Sales)",
            "(D) 軟體工程師 (Software Engineer)"
        ],
        correctAnswer: 2,
        explanation: "人工智慧產業中，典型的技術團隊角色包括機器學習科學家、資料科學家和軟體工程師。銷售人員則屬於業務範疇，不屬於技術團隊的典型角色。"
    },
    {
        id: "1-30",
        category: 1,
        text: "隨著人工智慧的進步，許多企業開始以不同的面相來參與人工智慧相關的行業。請問「新漢和清大合作並打造挑瑕疵機器人」之敘述的公司以及其參與的角度為下列哪一項？",
        options: [
            "(A) AI 平台供應者",
            "(B) AI 內容供應者",
            "(C) AI+",
            "(D) +AI"
        ],
        correctAnswer: 3,
        explanation: "此情境描述了公司使用既有的 AI 技術來建立一個新穎的應用，而不是直接開發 AI 技術。這符合 +AI 的範疇。"
    },
    {
        id: "1-31",
        category: 1,
        text: "隨著人工智慧的進步，許多企業開始以不同的面相來參與人工智慧相關的行業。請問「Microsoft 提供認知服務的人工智慧 API，使得使用者可以藉由呼叫該 API 來達到語音辨識」之敘述的公司以及其參與的角度為下列哪一項？",
        options: [
            "(A) AI 平台供應者",
            "(B) AI 內容供應者",
            "(C) AI+",
            "(D) +AI"
        ],
        correctAnswer: 0,
        explanation: "AI 平台供應者提供了人工智慧 API，讓應用程式可以透過呼叫這些 API 來實現特定的 AI 功能，而無需自行開發底層的 AI 模型。微軟的認知服務就是一個典型的 AI 平台。"
    },
    {
        id: "1-32",
        category: 1,
        text: "隨著人工智慧的進步，許多企業開始以不同的面相來參與人工智慧相關的行業。請問「Google 開放訓練內部工程師用的課程 Machine Learning Crash Course 給大眾免費學習」之敘述的公司以及其參與的角度為下列哪一項？",
        options: [
            "(A) AI 平台供應者",
            "(B) AI 內容供應者",
            "(C) AI+",
            "(D) +AI"
        ],
        correctAnswer: 1,
        explanation: "AI 內容供應者提供使用者可以互動的 AI 產品。Google 開放訓練課程給大眾免費學習，這屬於 AI 內容供應者的角度。"
    },
    {
        id: "1-33",
        category: 1,
        text: "隨著人工智慧的進步，許多企業開始以不同的面相來參與人工智慧相關的行業。請問「Amazon 開發出家庭用語音助理 Alexa」之敘述的公司以及其參與的角度為下列哪一項？",
        options: [
            "(A) AI 平台供應者",
            "(B) AI 內容供應者",
            "(C) AI+",
            "(D) +AI"
        ],
        correctAnswer: 2,
        explanation: "此題中的「Amazon 開發出家庭用語音助理 Alexa」顯示 Amazon 在其核心業務之外，將 AI 技術應用於產品開發。這種情況屬於 AI+ 的範疇。"
    },
    {
        id: "1-34",
        category: 1,
        text: "隨著人工智慧的進步，許多企業開始以不同的面相來參與人工智慧相關的行業。請問「Appier 發展出 Aixon 人工智慧商業決策平台，幫助企業整合各種資料，達到快速的資料洞察，幫助企業做出更快速更好的決策」之敘述的公司以及其參與的角度為下列哪一項？",
        options: [
            "(A) AI 平台供應者",
            "(B) AI 內容供應者",
            "(C) AI+",
            "(D) +AI"
        ],
        correctAnswer: 0,
        explanation: "Appier 發展的 Aixon 平台，是一個以 AI 技術為核心的產品。這個平台讓企業可以利用 AI 技術進行資料分析和決策，因此 Appier 是一家 AI 平台供應者。"
    },
    {
        id: "1-35",
        category: 1,
        text: "隨著人工智慧的進步，許多企業開始以不同的面相來參與人工智慧相關的行業。請問「中山醫學大學利用人工智慧技術建立肺炎診斷模型」之敘述的公司以及其參與的角度為下列哪一項？",
        options: [
            "(A) AI 平台供應者",
            "(B) AI 內容供應者",
            "(C) AI+",
            "(D) +AI"
        ],
        correctAnswer: 3,
        explanation: "「中山醫學大學利用人工智慧技術建立肺炎診斷模型」顯示這所大學將 AI 技術應用在醫學領域，以解決特定問題。這屬於 +AI 的範疇。"
    },
    {
        id: "1-36",
        category: 1,
        text: "由於在執行人工智慧需要大量的運算，因此有許多硬體的廠商也投入 AI 硬體的製造。其中有一個方向是在終端設備中加入支援人工智慧運算所需的硬體，使得人工智慧建立出的模型在終端設備中也可以高效能的執行。請問下列哪一項不屬於這類硬體產品？",
        options: [
            "(A) iPhone X 的 Face ID 晶片",
            "(B) Google 的 Pixel Visual Core 晶片",
            "(C) Nvidia 的 Tesla P100 晶片",
            "(D) Intel 的 Neural Compute Stick 晶片"
        ],
        correctAnswer: 2,
        explanation: "在支援 AI 運算的硬體中，iPhone X 的 Face ID 晶片、Google 的 Pixel Visual Core 晶片和 Intel 的 Neural Compute Stick 都是專為終端設備設計，以實現高效能的 AI 運算。而 Nvidia 的 Tesla P100 顯卡則是一種伺服器等級的 GPU，主要用於資料中心的大規模 AI 模型訓練，不屬於終端設備的硬體產品。"
    },
    // 第二類：AI 應用領域與產業發展 (2-01 ~ 2-36)
    {
        id: "2-01",
        category: 2,
        text: "電腦視覺技術在人工智慧中扮演著「眼」的角色，藉由辨識及處理影像資料所得到的資訊，可以發展更多有價值的應用。請問下列哪一種不為常見電腦視覺技術的應用之一？",
        options: [
            "(A) 停車場用的車牌辨識系統",
            "(B) YouTube 的自動字幕產生器",
            "(C) 無人商店自動結帳",
            "(D) iPhone 上的 Face ID"
        ],
        correctAnswer: 1,
        explanation: "電腦視覺技術的常見應用包括停車場的車牌辨識系統、無人商店自動結帳和 iPhone 的 Face ID。而 YouTube 的自動字幕產生器則屬於語音辨識的應用，不屬於電腦視覺範疇。"
    },
    {
        id: "2-02",
        category: 2,
        text: "近來人工智慧廣泛地應用在醫療領域方面，世界各國的科學家與工程師持續積極地與臨床醫學從業人員合作中，幫助我們改善醫療品質與效果。請問下列哪一項不為目前人工智慧應用在醫療領域上的案例？",
        options: [
            "(A) 接收醫療用的各種感應器的訊息來重建醫療用影像",
            "(B) 解讀病人的 X 光片判斷是否罹患肺炎",
            "(C) 人工智慧系統給出癌症判斷以及治療建議",
            "(D) 供醫生參考之雲端用藥系統"
        ],
        correctAnswer: 3,
        explanation: "人工智慧在醫療領域的應用非常廣泛。常見的案例包括：接收感應器訊息來重建醫療影像、解讀 X 光片並判斷疾病、以及給出癌症判斷和治療建議。而供醫生參考的雲端用藥系統雖然與醫療相關，但更偏向於資訊管理或藥物資料庫應用。"
    },
    {
        id: "2-03",
        category: 2,
        text: "自駕車根據其能力限制有區分成許多等級。現在搭載 Hardware-1 的特斯拉 (Tesla) 自駕車中，宣稱其可以達到在高速公路上自動駕駛。但是要求駕駛仍需在旁監看、隨時準備接手，且雙手不得離開方向盤。請問達到下列哪一個等級？",
        options: [
            "(A) Level 1",
            "(B) Level 2",
            "(C) Level 3",
            "(D) Level 5"
        ],
        correctAnswer: 1,
        explanation: "自駕車的能力根據其限制可分為不同等級。特斯拉 (Tesla) 的 Hardware-1 系統，宣稱可以在高速公路上自動駕駛，但仍需駕駛人隨時監看並準備接手，且雙手不能離開方向盤。這種需要駕駛人監督的自動駕駛系統，屬於 Level 2 等級。"
    },
    {
        id: "2-04",
        category: 2,
        text: "關於自駕車的一則新聞：「在 2018 年 5 月日，由 Alphabet 旗下子公司 Waymo 發展的 Google 自駕車，傳出車輛碰撞事故。但相比過去曾經在山景城街道上發生車禍情況，Google 自駕車在此次事故中並非肇事車輛，而是因為一台由人駕駛車輛為了閃避另一台車輛，導致撞擊當時處於低速自動駕駛狀態的 Google 自駕車。」請問 Waymo 開發此類自駕車預設其等級為下列哪一個？",
        options: [
            "(A) Level 1",
            "(B) Level 3",
            "(C) Level 4",
            "(D) Level 5"
        ],
        correctAnswer: 3,
        explanation: "Waymo 由 Google 發展，其自駕車被認為屬於 Level 4 等級。Level 4 意味著在特定環境下，車輛能完全自動駕駛，無需人類干預。"
    },
    {
        id: "2-05",
        category: 2,
        text: "關於自駕車的一則新聞：「奧迪在 2018 年發表全球首輛量產的自動駕駛車，是全球首輛採用光學雷達 (LiDAR) 的量產車。該車上配備的 Traffic Jam Pilot 主要是塞車情境設計，只能在高速公路上，且車速大約 60 公里以下時才能啟用。」請問奧迪開發此類自駕車預設其等級為下列哪一個？",
        options: [
            "(A) Level 1",
            "(B) Level 3",
            "(C) Level 4",
            "(D) Level 5"
        ],
        correctAnswer: 1,
        explanation: "奧迪在 2018 年發表的自動駕駛車，配備 Traffic Jam Pilot 功能。該功能僅限於高速公路，且車速在 60 公里/小時以下時才能啟用。這種在特定情境下能夠自動駕駛，但仍需要駕駛人監督的系統，屬於 Level 3 等級。"
    },
    {
        id: "2-06",
        category: 2,
        text: "由於人工智慧技術的進步，自駕車技術也漸漸地從實驗室中走出來邁向產品化。請問下列的技術中，哪一項不為自駕車中重要研究議題之一？",
        options: [
            "(A) 各種感測器技術",
            "(B) 超精細解析度地圖",
            "(C) 臉部辨識技術",
            "(D) 物體偵測技術"
        ],
        correctAnswer: 2,
        explanation: "自駕車技術從實驗室走向產品化，其重要研究議題包括各種感測器技術（如雷達、光速）、超精細解析度地圖和物體偵測技術。這些都是為了確保車輛能準確感知周遭環境。而臉部辨識技術主要應用於使用者身分驗證，並非自駕車的核心研究議題。"
    },
    {
        id: "2-07",
        category: 2,
        text: "根據聯合國統計，2014 年全球大約有三分之二的人口在城市中生活。預估 2050 年，全球大約將有三分之二的人口生活在城市中。因此許多城市都朝著智慧城市化的目標邁進，藉由引進許多相關的技術來解決更多城市中所面臨的問題挑戰。請問下列哪一項不為智慧城市所要達成的願景之一？",
        options: [
            "(A) 更多的連結性",
            "(B) 更好的環境品質",
            "(C) 節省能源和成本",
            "(D) 創造政府更多的營收"
        ],
        correctAnswer: 3,
        explanation: "智慧城市旨在透過感知與互動，提升居民的工作效率和生活品質。其核心願景包括增加連結性、改善環境品質和節省能源與成本。而「創造政府更多營收」雖然可能伴隨智慧城市的發展，但並非其主要願景之一。"
    },
    {
        id: "2-08",
        category: 2,
        text: "綜觀目前市面上的智慧音箱，除了具備基本對話能力，最普遍的應用具備新聞、天氣、行事曆、說故事等資訊和內容的提供。除了 Amazon 之外，其他廠牌的智慧音箱尚未將電子商務功能完整整合到音箱產品。請問下列哪一項不為主要的原因？",
        options: [
            "(A) 智慧音箱上的產品呈現方式與現實傳統商品呈現方式差異大",
            "(B) 智慧音箱在整合第三方服務時可能有困難",
            "(C) 智慧音箱的語音辨識率仍然不夠水準",
            "(D) 智慧音箱上支付流程困難"
        ],
        correctAnswer: 2,
        explanation: "儘管市面上許多智慧音箱已具備多種功能，但大多數廠牌仍未將電子商務功能完整整合。這主要是因為智慧音箱的語音辨識率仍不夠水準，在複雜的購物情境下，語音辨識的準確性不足以完成交易。"
    },
    {
        id: "2-09",
        category: 2,
        text: "人們在工作時，雖習慣用鍵盤或用觸控介面來與裝置溝通。但是在家中希望與裝置互動的模式更偏向於用語音的方式，也讓智慧音箱打中這個需求，更順勢帶起週邊家電一起智慧化的使用情境。目前的智慧家庭裝置取得資料後，可執行所謂的「邊緣運算」(Edge Computing) 來實現智慧功能。請問下列哪一項敘述中符合邊緣運算特性？",
        options: [
            "(A) 把感測到的資料傳回雲端進行運算後，實現智慧功能",
            "(B) 把智慧功能內建到設備本身的單點設備",
            "(C) 把智慧功能內建在數個設備上，分散式地進行運算",
            "(D) 把感測到的資料傳到使用者在家中架設的伺服器進行運算後，實現智慧功能"
        ],
        correctAnswer: 1,
        explanation: "邊緣運算（Edge Computing）的特點是在靠近資料來源的終端設備上進行運算，而不是將資料傳回遠端的雲端伺服器。這能夠減少延遲，實現即時的智慧功能。"
    },
    {
        id: "2-10",
        category: 2,
        text: "隨著語音辨識技術的進步，AI 語音助理也隨之產品化，漸漸地普及至每一個人的家庭中。請問下列哪一項不為著名之 AI 語音助理的產品？",
        options: [
            "(A) Google Assistant",
            "(B) Microsoft Azure",
            "(C) Amazon Echo",
            "(D) Apple Siri"
        ],
        correctAnswer: 1,
        explanation: "隨著語音辨識技術的進步，AI 語音助理產品越來越普及。Google Assistant、Amazon Echo 和 Apple Siri 都是著名的 AI 語音助理產品。而 Microsoft Azure 則是微軟的雲端運算服務平台，不是一個語音助理產品。"
    },
    {
        id: "2-11",
        category: 2,
        text: "智慧家庭整體也並未有共通的雲端服務標準可以讓業者追尋。各家業者自然有心中「最佳人選」，也就是說，終端設備的製造廠商必須挑選一個或數個雲端服務標準來支援。請問下列哪一個不為目前市面上智慧家庭雲端服務業者？",
        options: [
            "(A) Facebook",
            "(B) Apple",
            "(C) Google",
            "(D) Amazon"
        ],
        correctAnswer: 0,
        explanation: "目前智慧家庭產業缺乏統一的雲端服務標準。主要的雲端服務供應商包括 Apple、Google 和 Amazon，這些公司都提供了智慧家庭的雲端服務平台。而 Facebook 主要業務是社群媒體，目前不是市面上主流的智慧家庭雲端服務業者。"
    },
    {
        id: "2-12",
        category: 2,
        text: "由於各種智慧家電的通訊標準不一致，目前已經有大廠開始進行標準融合的工作，可望加速解決智慧家庭連網裝置不相容的問題。請問下列哪一項不為智慧家電主流的通訊技術？",
        options: [
            "(A) ZigBee",
            "(B) WiFi",
            "(C) LTE",
            "(D) Bluetooth"
        ],
        correctAnswer: 2,
        explanation: "智慧家電的通訊標準不一，但目前主流的通訊技術包括 ZigBee、Wi-Fi 和 Bluetooth。這些技術都用於智慧家庭設備之間的互聯網。而 LTE 主要是用於行動通訊的技術，不屬於智慧家電的主流通訊技術。"
    },
    {
        id: "2-13",
        category: 2,
        text: "目前由於各種智慧家電的通訊標準不一致，因此將這些智慧家庭的設備相連起來需要一些額外的解決方法。請問下列哪一項不為目前的解決方法之一？",
        options: [
            "(A) 透過雲端服務將智慧家電串連起來",
            "(B) 選用可以支援多重標準的裝置",
            "(C) 額外安裝閘道器作為中介",
            "(D) 安裝 AI 語音助理"
        ],
        correctAnswer: 3,
        explanation: "由於智慧家電的通訊標準不一致，需要額外的解決方法來串聯不同設備。這些方法包括：透過雲端服務、使用支援多重標準的裝置或安裝閘道器。而「安裝 AI 語音助理」是一種提供使用者介面的產品，本身無法解決不同通訊標準的相容性問題。"
    },
    {
        id: "2-14",
        category: 2,
        text: "隨著人工智慧 (AI) 技術的更多突破，物聯網 (IoT) 萬物相聯的蓬勃發展，兩者也匯流進化成 AIoT，正驅動「智慧應用」排出倒海而來。現在全球科技龍頭們無不卯足全力搶進 AIoT 的市場。請問，物聯網 (IoT) 在 AIoT 的主要功能不含下列哪一項？",
        options: [
            "(A) 資料感測",
            "(B) 資料分析",
            "(C) 資料傳輸",
            "(D) 資料收集與彙整"
        ],
        correctAnswer: 1,
        explanation: "AIoT 結合了人工智慧（AI）和物聯網（IoT）。物聯網 (IoT) 的主要功能是收集和傳輸資料，它透過各種感測器進行資料感測，並將其收集並傳輸。而資料分析則是人工智慧（AI）的主要功能。"
    },
    {
        id: "2-15",
        category: 2,
        text: "隨著人工智慧 (AI) 技術的更多突破，物聯網 (IoT) 萬物相聯的蓬勃發展，兩者也匯流進化成 AIoT，正驅動「智慧應用」排出倒海而來。現在全球科技龍頭們無不卯足全力搶進 AIoT 的市場。請問，人工智慧 (AI) 部分在 AIoT 所扮演的角色與功能不含下列哪一項？",
        options: [
            "(A) 資料前處理",
            "(B) 執行機器學習演算法",
            "(C) 發展適合終端設備的演算法",
            "(D) 資料傳輸與感測"
        ],
        correctAnswer: 3,
        explanation: "AIoT 中，人工智慧 (AI) 扮演的角色包括資料前處理、執行機器學習演算法和發展適合終端設備的演算法。這些都是 AI 處理資料和做出決策的功能。而資料傳輸與感測則是物聯網 (IoT) 的功能。"
    },
    {
        id: "2-16",
        category: 2,
        text: "隨著人工智慧 (AI) 技術的更多突破，物聯網 (IoT) 萬物相聯的蓬勃發展，兩者也匯流進化成 AIoT，正驅動「智慧應用」排出倒海而來。現在全球科技龍頭們無不卯足全力搶進 AIoT 的市場。請問，目前要結合人工智慧與物聯網的挑戰與發展方向不包含下列哪一項？",
        options: [
            "(A) AI 應用的系統安全性問題",
            "(B) 加強雲端服務與終端設備的連結",
            "(C) 發展適用於終端的輕量化演算法",
            "(D) 發展低功耗的運算晶片"
        ],
        correctAnswer: 1,
        explanation: "將人工智慧與物聯網結合，目前面臨的挑戰與發展方向包括：解決 AI 應用的系統安全性問題、發展適用於終端的輕量化演算法和發展低功耗的運算晶片。這些都是為了解決在物聯網設備上執行 AI 運算所遇到的挑戰。而「加強雲端服務與終端設備的連結」已經是目前 AIoT 的基本架構，不屬於待解決的挑戰或發展方向。"
    },
    {
        id: "2-17",
        category: 2,
        text: "智慧製造是指具有資訊自感知、自決策、自執行等功能的先進製造過程、系統與模式的總稱。請問智慧製造中的關鍵技術不包含下列哪一個？",
        options: [
            "(A) 人工智慧",
            "(B) 雲端計算",
            "(C) 物聯網",
            "(D) 精密機械"
        ],
        correctAnswer: 3,
        explanation: "智慧製造是指透過結合多種技術，實現資訊自感知、自決策和自執行。其關鍵技術包括人工智慧（用於決策）、雲端計算（用於資料處理）和物聯網（用於資訊感知與傳輸）。而精密機械雖然是製造業的基礎，但它本身不屬於智慧製造的關鍵技術範疇。"
    },
    {
        id: "2-18",
        category: 2,
        text: "智慧製造是指具有資訊自感知、自決策、自執行等功能的先進製造過程、系統與模式的總稱。請問下列哪一個不是智慧製造系統能帶來的好處？",
        options: [
            "(A) 生產線遠端監控",
            "(B) 整廠的數據串連",
            "(C) 預測性維護",
            "(D) 增加工廠內生產產品的多樣性"
        ],
        correctAnswer: 3,
        explanation: "智慧製造系統能帶來的好處包括生產線遠端監控、整廠的數據串連和預測性維護。這些都能提高生產效率和管理能力。而「增加工廠內生產產品的多樣性」則與智慧製造的技術層面無直接關聯。"
    },
    {
        id: "2-19",
        category: 2,
        text: "智慧製造是指具有資訊自感知、自決策、自執行等功能的先進製造過程、系統與模式的總稱。一般來說，一個產業要引入智慧製造，下列哪一個是要先考慮的議題？",
        options: [
            "(A) 購買工業 4.0 的新設備",
            "(B) 取得工廠設備以及環境資料的方法",
            "(C) 在設備上增添感測器",
            "(D) 將設備連上網路"
        ],
        correctAnswer: 1,
        explanation: "一個產業要導入智慧製造，首要考量的是如何取得工廠設備和環境的資料。因為沒有資料，就無法進行後續的分析、決策和自動化。因此，尋找資料獲取的方法是第一步。"
    },
    {
        id: "2-20",
        category: 2,
        text: "近來在都市地區的空氣污染日益嚴重，因此空氣污偵測變成一個重要的問題。有一個智慧城市的應用是政府發放空氣盒子給居民，使得居民可以安裝在家中，偵測家中的空氣品質。對比於政府自行架設空污觀測站，下列哪一個不為發放空氣盒子的好處？",
        options: [
            "(A) 降低安裝成本",
            "(B) 獲得更精確的空氣品質資料",
            "(C) 提高空氣品質偵測的採樣率",
            "(D) 增加空氣偵測的即時性"
        ],
        correctAnswer: 1,
        explanation: "政府發放空氣盒子給居民，讓居民在家中偵測空氣品質。這種模式的好處包括：降低了政府的安裝成本、提高了空氣品質偵測的採樣率（因裝置數量增加）和增加了即時性。但這種模式無法獲得像專業觀測站那樣更精確的空氣品質資料。"
    },
    {
        id: "2-21",
        category: 2,
        text: "近來在都市地區的空氣污染日益嚴重，因此空氣污偵測變成一個重要的問題。有一個智慧城市的應用是政府發放空氣盒子給居民，使得居民可以安裝在家中，偵測家中的空氣品質。對比於政府自行架設空污觀測站，下列哪一個不為發放空氣盒子的缺點？",
        options: [
            "(A) 需要居民安裝額外的設備",
            "(B) 可即時偵測家中空污的程度",
            "(C) 準確度較差",
            "(D) 可能有隱私權疑慮"
        ],
        correctAnswer: 1,
        explanation: "發放空氣盒子的缺點包括：需要居民安裝額外的設備、準確度較差和可能存在隱私權疑慮。而「可即時偵測家中空污的程度」是空氣盒子的一項優點，而非缺點。"
    },
    {
        id: "2-22",
        category: 2,
        text: "智慧城市的目標在於感知居民的資料與所有的設備系統形成經濟、有效的互動，讓人們可以有更好的工作效率及生活品質。每一個智慧城市都有其不同發展的主題。有許多城市致力於節能減碳，例如荷蘭阿姆斯特丹致力於低碳環保的目標，希望在2025年能夠達到相較於1990年減碳25%的目標。請問下列哪一項不為節能減碳的相關措施？",
        options: [
            "(A) 智慧照明",
            "(B) 車輛共乘",
            "(C) 電動車充電網路",
            "(D) 智慧地調控通勤巴士的間距"
        ],
        correctAnswer: 2,
        explanation: "為了實現節能減碳的目標，智慧城市會採取多種措施，如：智慧照明、車輛共乘和智慧地調控通勤巴士的間距。這些都旨在減少能源消耗和碳排放。而「電動車充電網路」雖然與綠色運輸有關，但它本身是一種基礎設施，其主要功能是為電動車提供電力，不直接屬於節能減碳的措施。"
    },
    {
        id: "2-23",
        category: 2,
        text: "智慧城市的目標在於感知居民的資料與所有的設備系統形成經濟、有效的互動，讓人們可以有更好的工作效率及生活品質。每一個智慧城市都有其不同發展的主題。為了能夠更有效率的使用資源，智慧電網便是一個受到大家關注的議題。請問下列哪一項不為智慧電網的特性？",
        options: [
            "(A) 架設智慧電表讓民眾了解用電情形",
            "(B) 動態調整電廠發電與再生能源比例",
            "(C) 供電方向為單向而非雙向",
            "(D) 尖峰時段可能產生供電量不足的情形"
        ],
        correctAnswer: 2,
        explanation: "智慧電網旨在提高能源使用效率。其特性包括：安裝智慧電表讓民眾了解用電情況、動態調整電廠發電與再生能源比例和解決尖峰時段供電量不足的問題。這些都是智慧電網的優勢。而「供電方向為單向而非雙向」則是傳統電網的特點，智慧電網的供電應為雙向，以適應分散式發電（如太陽能）。"
    },
    {
        id: "2-24",
        category: 2,
        text: "智慧城市的目標在於感知居民的資料與所有的設備系統形成經濟、有效的互動，讓人們可以有更好的工作效率及生活品質。每一個智慧城市都有其不同發展的主題。請問下列哪一項不為智慧政府的議題？",
        options: [
            "(A) 政府線上服務數量",
            "(B) 政府公務人員數量減少",
            "(C) 開放資料程度",
            "(D) 個人隱私保護措施"
        ],
        correctAnswer: 1,
        explanation: "智慧政府的議題包括利用科技來提升城市管理和服務，這些議題涵蓋了政府線上服務數量、開放資料、個人隱私保護以及運輸設施與 ICT 的整合程度。而政府公務人員數量減少雖然可能隨著智慧化而發生，但它不屬於智慧政府所關注的議題範疇。"
    },
    {
        id: "2-25",
        category: 2,
        text: "智慧城市的目標在於感知居民的資料與所有的設備系統形成經濟、有效的互動，讓人們可以有更好的工作效率及生活品質。每一個智慧城市都有其不同發展的主題。許多先進城市中因為老年人口增加，因此銀髮族照護變成一個重要的議題。請問下列哪一項不為智慧城市中銀髮族照護的措施？",
        options: [
            "(A) 提供遠端照護平台",
            "(B) 建置意外通報平台",
            "(C) 生命徵象雲端管理平台協助",
            "(D) 依照需求設置安養院"
        ],
        correctAnswer: 3,
        explanation: "由於人口老化，銀髮族照護是智慧城市的重要議題。相關措施包括：提供遠端照護平台、建置意外通報平台和利用雲端管理平台協助生命徵象監測。這些都是利用科技來提供更便利、更即時的照護服務。而「依照需求設置安養院」屬於傳統的照護方式，不是智慧城市透過科技解決問題的措施。"
    },
    {
        id: "2-26",
        category: 2,
        text: "智慧城市的目標在於感知居民的資料與所有的設備系統形成經濟、有效的互動，讓人們可以有更好的工作效率及生活品質。智慧城市中有一項重要的任務即在改善城市中的交通品質。請問下列哪一項不為目前智慧城市中收集交通資訊的管道之一？",
        options: [
            "(A) 智慧卡使用紀錄",
            "(B) 高速公路上的自動收費系統",
            "(C) 車聯網",
            "(D) 紅外線監視系統"
        ],
        correctAnswer: 2,
        explanation: "為了改善城市交通品質，智慧城市會透過多種管道收集交通資訊。這些管道包括：智慧卡使用紀錄、高速公路上的自動收費系統和紅外線監視系統。這些都能提供交通流量等數據。而「車聯網」是指車輛之間的通訊網路，屬於智慧移動的範疇，不屬於收集交通資訊的管道。"
    },
    {
        id: "2-27",
        category: 2,
        text: "智慧城市的目標在於感知居民的資料與所有的設備系統形成經濟、有效的互動，讓人們可以有更好的工作效率及生活品質。每一個智慧城市都有其不同發展的主題。請問下列哪一項不為智慧移動的議題？",
        options: [
            "(A) 公共運輸利用率",
            "(B) 綠色與非機動性運輸使用量",
            "(C) 運輸設施與 ICT 整合程度",
            "(D) 居民擁有運輸設備的種類及數量"
        ],
        correctAnswer: 3,
        explanation: "智慧移動是智慧城市的一個重要主題。相關議題包括：公共運輸利用率、綠色與非機動性運輸使用量和運輸設施與 ICT 整合程度。這些都旨在優化城市的交通系統。而「居民擁有運輸設備的種類及數量」則是一個描述性的數據，不屬於智慧移動所要解決的議題。"
    },
    {
        id: "2-28",
        category: 2,
        text: "許多企業在人工智慧興起的這一波浪潮中，首先考慮引進的就是人工智慧客服。人工智慧客服可以進行重複性極高的工作，讓人去處理更需要複雜判斷能力的客服事件。請問下列哪一項不為一個成功的人工智慧客服系統之必要元素？",
        options: [
            "(A) 條列式的問題答覆資料庫",
            "(B) 專業的客服人員",
            "(C) 聊天機器人",
            "(D) 手機 APP"
        ],
        correctAnswer: 3,
        explanation: "一個成功的人工智慧客服系統應具備以下必要元素：條列式的問題答覆資料庫（提供基本問答）、專業的客服人員（處理複雜問題）和聊天機器人（進行自動化對話）。這些元素共同協作，以應對不同層級的客戶問題。而「手機 APP」只是客服系統的呈現介面，不是其成功的必要元素。"
    },
    {
        id: "2-29",
        category: 2,
        text: "應用人工智慧於金融業中可以讓業者得到顯著而且直接獲益，這項技術我們通稱為 FinTech。在 FinTech 中目前較成熟的 AI 應用是對抗詐騙風險、管控經鹽風險、消除風險和精準行銷。請問「根據過去 20 年數據，針對每個車禍核案案例，利用圖像識別的技術以及處理文件內容識別，和車禍圖像比對，來辨識圖片資訊，以決定是否核賠。」情境是屬於下列哪一種？",
        options: [
            "(A) 對抗詐欺風險",
            "(B) 管控經營風險",
            "(C) 消除風險",
            "(D) 精準行銷"
        ],
        correctAnswer: 0,
        explanation: "FinTech 中，AI 的應用包括對抗詐騙、管控風險和精準行銷。題目中「根據車禍案例的圖像識別技術和文件內容識別，來決定是否核賠」描述了利用 AI 技術來辨識詐欺行為，以避免不當的保險理賠。這屬於對抗詐欺風險。"
    },
    {
        id: "2-30",
        category: 2,
        text: "應用人工智慧於金融業中可以讓業者得到顯著而且直接獲益，這項技術我們通稱為 FinTech。在 FinTech 中目前較成熟的 AI 應用是對抗詐騙風險、管控經營風險、消除風險和精準行銷。請問「建立個人特徵資料、資產數據和其他數據，來決定推銷給客戶適當的商品，避免產品品種雷同，或是老舊等情況出現」情境是屬於下列哪一種？",
        options: [
            "(A) 對抗詐欺風險",
            "(B) 管控經營風險",
            "(C) 消除風險",
            "(D) 精準行銷"
        ],
        correctAnswer: 3,
        explanation: "精準行銷是指透過分析客戶資料來推銷適當的產品。題目中「建立個人特徵資料、資產數據...來決定推銷給客戶適當的商品，避免產品品種雷同，或是老舊」正是精準行銷的具體應用。"
    },
    {
        id: "2-31",
        category: 2,
        text: "應用人工智慧於金融業中可以讓業者得到顯著而且直接獲益，這項技術我們通稱為 FinTech。在 FinTech 中目前較成熟的 AI 應用是對抗詐騙風險、管控經營風險、消除風險和精準行銷。請問「為企業做行業外部評估以及與情分析，藉由收集整合分析各種揭露資訊來看市場對於相關利害企業的評價為正是或是負。」情境是屬於下列哪一種？",
        options: [
            "(A) 對抗詐欺風險",
            "(B) 管控經營風險",
            "(C) 消除風險",
            "(D) 精準行銷"
        ],
        correctAnswer: 1,
        explanation: "管控經營風險旨在透過分析市場輿情和外部評估來評估企業的價值。題目中「為企業做行業外部評估以及輿情分析，藉由收集整合分析各種揭露資訊來看市場對於相關利害企業的評價為正是或是負。」正是用 AI 來預測和管控企業的經營風險。"
    },
    {
        id: "2-32",
        category: 2,
        text: "近伴隨人工智慧與感測技術的技術突破，人體最重要的資訊都可以透過智慧裝置感測，這些具體數據可以進一步做呈現以及分析，發展智慧醫療的各種應用。這就是所謂的 AloH (AI + Health)。請問台灣在 AloH 上具有獨特的優勢為下列哪一項？",
        options: [
            "(A) 台灣在製作精密醫療設備的技術獨步全球",
            "(B) 台灣的健保資料庫完整保存病人身體資訊以及診斷紀錄",
            "(C) 台灣在製作以及整合晶片的技術領先",
            "(D) 台灣在健保的制度下有很多人去看醫生"
        ],
        correctAnswer: 1,
        explanation: "AloH (AI + Health)旨在將 AI 應用於醫療領域。台灣在 AloH 領域的獨特優勢是完整的健保資料庫。這個資料庫保存了病人身體資訊和診斷紀錄，為 AI 模型的訓練提供了大量且高品質的數據。"
    },
    {
        id: "2-33",
        category: 2,
        text: "近伴隨人工智慧與感測技術的技術突破，人體最重要的資訊都可以透過智慧裝置感測，這些具體數據可以進一步做呈現以及分析，發展智慧醫療的各種應用。這就是所謂的 AloH (Al + Health)。請問下列哪一項為在 AloH 中最先考慮的議題？",
        options: [
            "(A) 個人隱私以及醫療倫理",
            "(B) 製作高精度的硬體設施",
            "(C) AloH 中的應用是否具有實用性",
            "(D) 是否有專業醫療人員進行系統的驗證與操作"
        ],
        correctAnswer: 0,
        explanation: "在 AloH 的發展中，第一個要考慮的議題是個人隱私以及醫療倫理。由於 AloH 處理的是高度敏感的人體資訊和診斷紀錄，因此必須優先確保資料的隱私和使用規範符合倫理道德。"
    },
    {
        id: "2-34",
        category: 2,
        text: "近伴隨人工智慧與感測技術的技術突破，人體最重要的資訊都可以透過智慧裝置感測，這些具體數據可以進一步做呈現以及分析，發展智慧醫療的各種應用。這就是所謂的 AloH (Al + Health)。請問下列哪一項不為 AloH 的應用之一？",
        options: [
            "(A) 自駕車的防睡眠裝置",
            "(B) 協助醫護人員與外界溝通的腦機介面技術",
            "(C) 皮膚癌 AI 診斷軟體",
            "(D) 指紋辨識解鎖系統"
        ],
        correctAnswer: 3,
        explanation: "AloH (AI + Health)的應用範圍涵蓋了醫療與健康領域。自駕車的防睡眠裝置、協助醫護人員的腦機介面技術和皮膚癌 AI 診斷軟體都屬於 AloH 的應用。而指紋辨識解鎖系統屬於資安應用，不屬於醫療健康領域。"
    },
    {
        id: "2-35",
        category: 2,
        text: "請問在「IBM Watson Health 健康長端伊 (Kyu Rhee) 博士曾提出醫療 AI 三大原則：目的、透明和技能，都是為了幫助人類，而不是取而代之，瑞伊博士認為 AI 是一種新技能，當『人類+AI』(Human+AI)，才完整增強人們的能力。」該則新聞中所謂的「人類+AI」的適用範圍不包含下列哪一項？",
        options: [
            "(A) 臨床醫藥人員",
            "(B) 管理人員",
            "(C) 健康 IT 專業人員",
            "(D) 一般民眾"
        ],
        correctAnswer: 0,
        explanation: "「人類+AI」的概念指的是 AI 是一種新技能，其目的是增強人類的能力，而非取代人類。這個概念適用於管理人員、健康 IT 專業人員和一般民眾。然而，它不適用於臨床醫藥人員。這是因為 AI 在醫療領域的應用更為複雜，需要嚴格的法規和倫理規範，單純的「人類+AI」概念並不能完全涵蓋。"
    },
    {
        id: "2-36",
        category: 2,
        text: "目前在世界上，許多貧窮的人相較於富有的人因為無法接受適當醫療而產生較多的失能以及壽命的縮短。這就是因為社會、經濟、教育等種種不平等造成的醫療不平等。在人工智慧技術的蓬勃發展，「平等醫療」有可能實現。請問，人工智慧在平等醫療的概念下扮演什麼角色？",
        options: [
            "(A) 透過人工智慧對病人做初步的診斷",
            "(B) 透過人工智慧對病人選擇適當的醫院",
            "(C) 透過人工智慧讓財產分配更平均使得經濟上的條件更公平",
            "(D) 透過人工智慧取代醫生進行治療"
        ],
        correctAnswer: 0,
        explanation: "「平等醫療」旨在解決因社會經濟不平等而導致的醫療資源不均問題。人工智慧可以在這個概念下扮演對病人進行初步診斷的角色。透過 AI 進行初步診斷，可以讓醫療資源更公平地分配，使貧窮地區的人也能獲得基本的醫療協助。"
    }
];

// 初始化變數
let currentQuestionIndex = 0;
let userAnswers = new Array(questions.length).fill(null);
let score = 0;

// DOM 元素
const category1Element = document.getElementById('category1');
const category2Element = document.getElementById('category2');
const currentQuestionElement = document.getElementById('current-question');
const questionTextElement = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const feedbackElement = document.getElementById('feedback');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const submitBtn = document.getElementById('submit-btn');
const progressElement = document.getElementById('progress');
const scoreElement = document.getElementById('score');

// 初始化題目列表
function initializeQuestionList() {
    // 清空題目列表
    category1Element.innerHTML = '';
    category2Element.innerHTML = '';
    
    // 生成題目列表
    questions.forEach((question, index) => {
        const questionItem = document.createElement('div');
        questionItem.className = 'question-item';
        questionItem.textContent = question.id;
        questionItem.dataset.index = index;
        
        // 點擊題目項目時切換到該題目
        questionItem.addEventListener('click', () => {
            currentQuestionIndex = index;
            displayQuestion();
        });
        
        // 根據類別添加到對應的容器
        if (question.category === 1) {
            category1Element.appendChild(questionItem);
        } else {
            category2Element.appendChild(questionItem);
        }
    });
}

// 顯示當前題目
function displayQuestion() {
    const question = questions[currentQuestionIndex];
    
    // 更新題目編號和內容
    currentQuestionElement.textContent = `題目 ${question.id}`;
    questionTextElement.textContent = question.text;
    
    // 清空選項容器
    optionsContainer.innerHTML = '';
    
    // 生成選項
    question.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.className = 'option';
        optionElement.textContent = option;
        
        // 如果用戶已經選擇了這個選項，添加selected類
        if (userAnswers[currentQuestionIndex] === index) {
            optionElement.classList.add('selected');
        }
        
        // 點擊選項
        optionElement.addEventListener('click', () => {
            // 移除其他選項的selected類
            document.querySelectorAll('.option').forEach(opt => {
                opt.classList.remove('selected');
            });
            
            // 添加selected類到當前選項
            optionElement.classList.add('selected');
            
            // 保存用戶答案
            userAnswers[currentQuestionIndex] = index;
            
            // 更新題目列表中的狀態
            updateQuestionStatus();
        });
        
        optionsContainer.appendChild(optionElement);
    });
    
    // 隱藏反饋
    feedbackElement.style.display = 'none';
    
    // 更新導航按鈕狀態
    updateNavigationButtons();
    
    // 更新題目列表中的當前題目
    updateCurrentQuestionInList();
    
    // 更新進度和分數
    updateProgressAndScore();
}

// 更新題目列表中的狀態
function updateQuestionStatus() {
    const questionItems = document.querySelectorAll('.question-item');
    
    questions.forEach((question, index) => {
        const questionItem = questionItems[index];
        
        // 移除所有狀態類
        questionItem.classList.remove('active', 'answered', 'incorrect');
        
        // 如果是當前題目，添加active類
        if (index === currentQuestionIndex) {
            questionItem.classList.add('active');
        }
        
        // 如果用戶已回答，添加answered類
        if (userAnswers[index] !== null) {
            // 檢查答案是否正確
            if (userAnswers[index] === question.correctAnswer) {
                questionItem.classList.add('answered');
            } else {
                questionItem.classList.add('incorrect');
            }
        }
    });
}

// 更新題目列表中的當前題目
function updateCurrentQuestionInList() {
    const questionItems = document.querySelectorAll('.question-item');
    
    // 移除所有active類
    questionItems.forEach(item => {
        item.classList.remove('active');
    });
    
    // 添加active類到當前題目
    if (questionItems[currentQuestionIndex]) {
        questionItems[currentQuestionIndex].classList.add('active');
    }
}

// 更新導航按鈕狀態
function updateNavigationButtons() {
    // 上一題按鈕
    prevBtn.disabled = currentQuestionIndex === 0;
    
    // 下一題按鈕
    nextBtn.disabled = currentQuestionIndex === questions.length - 1;
}

// 更新進度和分數
function updateProgressAndScore() {
    // 計算已回答的題數
    const answeredCount = userAnswers.filter(answer => answer !== null).length;
    
    // 計算得分
    score = 0;
    questions.forEach((question, index) => {
        if (userAnswers[index] === question.correctAnswer) {
            score++;
        }
    });
    
    // 更新顯示
    progressElement.textContent = `${answeredCount}/${questions.length}`;
    scoreElement.textContent = score;
}

// 提交答案
function submitAnswer() {
    const question = questions[currentQuestionIndex];
    const selectedOption = userAnswers[currentQuestionIndex];
    
    // 檢查是否已選擇答案
    if (selectedOption === null) {
        alert('請先選擇一個答案！');
        return;
    }
    
    // 顯示反饋
    feedbackElement.style.display = 'block';
    
    // 檢查答案是否正確
    if (selectedOption === question.correctAnswer) {
        feedbackElement.textContent = `正確！${question.explanation}`;
        feedbackElement.className = 'feedback correct';
    } else {
        feedbackElement.textContent = `錯誤！正確答案是：${question.options[question.correctAnswer]}。${question.explanation}`;
        feedbackElement.className = 'feedback incorrect';
    }
    
    // 更新選項樣式
    const options = document.querySelectorAll('.option');
    options.forEach((option, index) => {
        if (index === question.correctAnswer) {
            option.classList.add('correct');
        } else if (index === selectedOption && index !== question.correctAnswer) {
            option.classList.add('incorrect');
        }
    });
    
    // 更新題目列表中的狀態
    updateQuestionStatus();
    
    // 更新進度和分數
    updateProgressAndScore();
}

// 事件監聽器
prevBtn.addEventListener('click', () => {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        displayQuestion();
    }
});

nextBtn.addEventListener('click', () => {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        displayQuestion();
    }
});

submitBtn.addEventListener('click', submitAnswer);

// 初始化
initializeQuestionList();
displayQuestion();
