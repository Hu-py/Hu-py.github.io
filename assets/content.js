/* Bilingual academic homepage content. Edit en / zh values here. */
window.SITE = {
  "profile": {
    "name": {
      "en": "Pingyan Hu",
      "zh": "胡玶妍"
    },
    "alternateName": {
      "en": "胡玶妍",
      "zh": "Pingyan Hu"
    },
    "portrait": "assets/images/portrait-1.jpg",
    "affiliation": {
      "en": "Master’s Student · Tongji University",
      "zh": "同济大学 · 城乡规划学硕士研究生"
    },
    "department": {
      "en": "College of Architecture and Urban Planning",
      "zh": "建筑与城市规划学院"
    },
    "headline": {
      "en": "Urban Spatial Intelligence · Multimodal Representation · Urban Agents",
      "zh": "城市空间智能 · 多模态表征 · 城市智能体"
    },
    "bio": {
      "en": "My research focuses on <strong>urban spatial intelligence</strong>, particularly <em>multimodal geospatial representation</em> and <em>urban agents</em>. I develop computational methods that learn urban structure, functions, and dynamics from heterogeneous observations to support spatial inference, spatiotemporal prediction, and intelligent decision-making.",
      "zh": "我的研究聚焦<strong>城市空间智能</strong>，重点关注<em>多模态地理空间表征</em>与<em>城市智能体</em>，探索如何从异构城市观测中理解复杂城市环境的空间结构、功能组织与动态运行，并支持空间推断、时空预测和智能决策。"
    },
    "interests": {
      "en": [
        "Urban Spatial Intelligence",
        "Multimodal Geospatial Representation",
        "Urban Agents"
      ],
      "zh": [
        "城市空间智能",
        "多模态地理空间表征",
        "城市智能体"
      ]
    },
    "email": "2530161@tongji.edu.cn",
    "github": "https://github.com/Hu-py",
    "scholar": null,
    "cv": null
  },
  "projects": [
    {
      "id": "urban-3d",
      "date": {
        "en": "Ongoing",
        "zh": "在研"
      },
      "title": {
        "en": "Reconstructing 3D urban functional semantics",
        "zh": "城市三维功能语义重建"
      },
      "subtitle": {
        "en": "Inferring vertical building functions from incomplete observations",
        "zh": "不完整观测下的建筑垂直功能推断"
      },
      "question": {
        "en": "How can the floor-level functions of urban buildings be reconstructed from sparse, long-tailed, and incomplete POI observations?",
        "zh": "如何利用稀疏、长尾且不完整的 POI 观测，重建建筑楼层尺度的城市功能语义？"
      },
      "description": {
        "en": "Approximately 170K POIs are cleaned, matched to buildings, and resolved to floor levels using rule-based parsing and LLM-assisted inference. To address long-tailed floor observations and scarce high-floor labels, VLM-derived architectural semantics, 3D building morphology, and spatial-neighborhood features are integrated to explore weakly supervised reconstruction of floor-level functional distributions.",
        "zh": "以单城市为研究原型，整合约 17 万条 POI，结合规则解析与 LLM 辅助推断，开展功能语义清洗、建筑实体匹配和楼层信息恢复，构建高置信度垂直功能标签。面向楼层观测长尾与高楼层样本稀缺问题，融合 VLM 建筑视觉语义、三维建筑形态及空间邻域特征，探索多模态弱监督学习与空间关系建模，实现建筑内部楼层级功能语义重建。"
      },
      "tags": [
        "3D Semantics",
        "Multimodal Learning",
        "Graph Learning"
      ],
      "image": "assets/images/urban-3d.webp",
      "imageAlt": {
        "en": "3D urban functional semantic reconstruction framework",
        "zh": "城市三维功能语义重建研究框架"
      },
      "figureLabel": {
        "en": "3D urban semantics",
        "zh": "三维城市语义"
      },
      "links": {
        "paper": null,
        "code": null,
        "project": null
      },
      "descriptionHighlights": {
        "zh": [
          "LLM 辅助推断",
          "VLM 建筑视觉语义",
          "多模态弱监督学习",
          "楼层级功能语义重建"
        ],
        "en": [
          "LLM-assisted inference",
          "VLM-derived architectural semantics",
          "weakly supervised reconstruction"
        ]
      }
    },
    {
      "id": "flood-agent",
      "date": {
        "en": "Mar – Jun 2026 · SenseTime",
        "zh": "2026.03–06 · 商汤科技"
      },
      "title": {
        "en": "An urban flood-response agent",
        "zh": "城市防汛智能体"
      },
      "subtitle": {
        "en": "Hierarchical agent coordination and physics–data fusion forecasting",
        "zh": "层级式智能体协同与机理—数据融合预测"
      },
      "question": {
        "en": "How can evolving flood states be predicted across interconnected drainage and river systems to support coordinated, risk-aware response?",
        "zh": "如何预测排水—河道耦合系统中的洪涝状态演化，并据此支撑跨尺度风险研判与协同响应？"
      },
      "description": {
        "en": "A hierarchical basin-level/global and district-level/local agent architecture links drainage demand, operating constraints, plan coordination, and feedback. An interpretable rainfall–runoff–discharge–river-response model is coupled with gradient-boosted residual learning for half-hour water-level forecasting, reducing validation RMSE from 1.048 m to 0.434 m across river segments. Forecast states feed into scenario evaluation and rolling dispatch decisions.",
        "zh": "设计“流域级全局智能体—片区级局部智能体”双层调度架构，通过需求上报、边界下达、方案协调与反馈修正支持全局约束下的分布式决策。构建“降雨—汇流—排放—河道响应”的可解释动态模型，并利用梯度提升学习物理预测残差，实现半小时尺度水位预测，验证集全河段 RMSE 由 1.048 m 降至 0.434 m；将预测状态纳入情景推演与滚动调度闭环。"
      },
      "tags": [
        "Urban Agents",
        "Hybrid Modeling",
        "Spatiotemporal Prediction"
      ],
      "image": "assets/images/sensetime/framework.webp",
      "imageAlt": {
        "en": "Urban flood-response agent for the Suzhou Creek watershed",
        "zh": "面向苏州河流域的城市防汛智能体"
      },
      "figureLabel": {
        "en": "Urban flood-response agent",
        "zh": "城市防汛智能体"
      },
      "links": {
        "paper": null,
        "code": null,
        "project": null
      },
      "descriptionHighlights": {
        "zh": [
          "双层调度架构",
          "可解释动态模型",
          "梯度提升学习物理预测残差",
          "1.048 m 降至 0.434 m",
          "滚动调度闭环"
        ],
        "en": [
          "hierarchical basin-level/global and district-level/local agent architecture",
          "gradient-boosted residual learning",
          "1.048 m to 0.434 m",
          "rolling dispatch decisions"
        ]
      }
    },
    {
      "id": "urban-renewal",
      "date": {
        "en": "Sep – Oct 2026",
        "zh": "2026.09–10"
      },
      "title": {
        "en": "Multimodal urban representation and renewal potential inference",
        "zh": "多模态城市表征与更新潜力推断"
      },
      "subtitle": {
        "en": "Performance-residual diagnosis and scenario-based renewal in Yangjinggang",
        "zh": "洋泾港城市体检：绩效残差诊断与更新情景优化"
      },
      "question": {
        "en": "Which urban parcels underperform relative to their contextual and spatial assets, and which feasible asset adjustments may improve predicted performance?",
        "zh": "哪些地块的实测绩效低于其背景与空间资源条件所对应的预测水平？哪些可干预要素值得优先调整？"
      },
      "description": {
        "en": "Population, POIs, transport, building morphology, remote sensing, and streetscape observations are fused into parcel-level multimodal representations. A citywide model estimates performance from contextual conditions (C) and spatial assets (A); observed–predicted residuals help screen underperforming parcels. Attribute diagnostics then identify weak spatial resources, while scenario testing holds C fixed and adjusts A to compare model-predicted improvements and explore lower-change renewal options under planning constraints.",
        "zh": "融合人口、POI、交通、建筑形态、遥感及街景信息，构建地块级多模态城市表征；基于上海城市尺度样本，学习背景条件（C）与空间资源（A）共同对应的绩效规律，通过实测—预测残差筛选相对低绩效地块。进一步诊断绿化、街道界面、步行环境和服务供给等可干预要素，固定 C、调整 A 进行模型情景测试，在规划约束下探索较低调整幅度的更新组合与实施优先序。"
      },
      "tags": [
        "Urban Representation",
        "Counterfactual Learning",
        "Urban Planning"
      ],
      "image": "assets/images/urban-renewal.webp",
      "imageAlt": {
        "en": "Multimodal urban representation and renewal inference framework",
        "zh": "多模态城市表征与更新潜力推断框架"
      },
      "figureLabel": {
        "en": "Urban renewal inference",
        "zh": "城市更新推断"
      },
      "links": {
        "paper": null,
        "code": null,
        "project": null
      },
      "descriptionHighlights": {
        "zh": [
          "地块级多模态城市表征",
          "实测—预测残差",
          "固定 C、调整 A",
          "更新组合与实施优先序"
        ],
        "en": [
          "parcel-level multimodal representations",
          "observed–predicted residuals",
          "holds C fixed and adjusts A",
          "lower-change renewal options"
        ]
      }
    },
    {
      "id": "child-health",
      "date": {
        "en": "2025 – 2026",
        "zh": "2025–2026"
      },
      "title": {
        "en": "City-scale spatial inference of child neurodevelopment",
        "zh": "城市尺度儿童神经发育空间推断"
      },
      "subtitle": {
        "en": "Socioeconomic feature reconstruction and reliable spatial extrapolation",
        "zh": "社会经济特征重建与可靠空间外推"
      },
      "question": {
        "en": "How can neurodevelopment be inferred at city scale when both health observations and key socioeconomic features are spatially incomplete?",
        "zh": "在健康观测与关键社会经济特征均不完整的条件下，如何实现儿童神经发育的城市尺度推断与可靠空间外推？"
      },
      "description": {
        "en": "A two-stage framework reconstructs missing socioeconomic features from population, housing, and urban-environment data before inferring neurodevelopmental outcomes using built-environment and street-network representations. Sparse target-area observations, GraphSAGE neighborhood embeddings, and Area of Applicability assessments improve spatial extrapolation: empirically supported coverage increases from 17.4% to 43.2% and from 36.7% to 52.5% across two stages, with a final cross-validated R² of 0.683.",
        "zh": "针对健康观测与关键社会经济特征同时缺失的问题，构建“社会经济特征重建—神经发育空间推断”两阶段框架，融合人口、住房、城市环境与街道网络信息开展空间预测。结合目标区域稀疏样本、GraphSAGE 邻域表征与 Area of Applicability 评估空间外推适用性，使两阶段经验支持覆盖率分别由 17.4% 提升至 43.2%、由 36.7% 提升至 52.5%，最终模型交叉验证 R² = 0.683。"
      },
      "tags": [
        "Urban Health",
        "Graph Learning",
        "Spatial Inference"
      ],
      "image": "assets/images/child-health.webp",
      "imageAlt": {
        "en": "Socioeconomic reconstruction and city-scale inference of child neurodevelopment",
        "zh": "社会经济表征重建与儿童神经发育城市尺度空间推断"
      },
      "figureLabel": {
        "en": "Child neurodevelopment",
        "zh": "儿童神经发育"
      },
      "links": {
        "pdf": "assets/pdfs/child-health.pdf",
        "paper": null,
        "code": null,
        "project": null
      },
      "descriptionHighlights": {
        "zh": [
          "两阶段框架",
          "GraphSAGE 邻域表征",
          "Area of Applicability",
          "17.4% 提升至 43.2%",
          "36.7% 提升至 52.5%",
          "R² = 0.683"
        ],
        "en": [
          "two-stage framework",
          "GraphSAGE neighborhood embeddings",
          "Area of Applicability",
          "17.4% to 43.2%",
          "36.7% to 52.5%",
          "R² of 0.683"
        ]
      }
    },
    {
      "id": "heritage-risk",
      "date": {
        "en": "Apr – Jun 2026",
        "zh": "2026.04–06"
      },
      "title": {
        "en": "Intelligent risk assessment for cultural heritage",
        "zh": "国土空间文物资源智能风险评估"
      },
      "subtitle": {
        "en": "LLM-based semantic structuring and network risk propagation",
        "zh": "LLM 语义结构化与网络风险传播"
      },
      "question": {
        "en": "How can heterogeneous heritage records be converted into spatial networks that reveal vulnerable buildings and risk-propagation pathways?",
        "zh": "如何将异构文物资料转化为空间网络表征，识别高风险建筑及潜在风险传播路径？"
      },
      "description": {
        "en": "As part of a national research subproject, LLM-assisted semantic annotation and attribute extraction are used to structure cultural-heritage information. Building-level spatial graphs, network percolation, and propagation simulations support the identification of vulnerable heritage buildings and potential paths of cascading risk.",
        "zh": "参与国家重点研发计划相关子课题，开展基于 LLM 的文物语义标注与属性结构化，构建建筑尺度空间图；结合网络渗流与风险传播建模，通过节点风险表征和空间扩散模拟识别高风险文物建筑及潜在传播路径。"
      },
      "tags": [],
      "image": null,
      "imageAlt": {
        "en": "Cultural heritage risk propagation framework",
        "zh": "文物资源空间风险传播框架"
      },
      "figureLabel": {
        "en": "Heritage risk",
        "zh": "文物风险"
      },
      "links": {
        "paper": null,
        "code": null,
        "project": null
      },
      "descriptionHighlights": {
        "zh": [
          "LLM 的文物语义标注与属性结构化",
          "建筑尺度空间图",
          "网络渗流与风险传播建模"
        ],
        "en": [
          "LLM-assisted semantic annotation",
          "Building-level spatial graphs",
          "network percolation",
          "propagation simulations"
        ]
      }
    },
    {
      "id": "metro-resilience",
      "date": {
        "en": "2025 – 2026",
        "zh": "2025–2026"
      },
      "title": {
        "en": "Metro-network resilience under extreme rainfall",
        "zh": "极端降雨下地铁网络级联失效与韧性建模"
      },
      "subtitle": {
        "en": "Pressure–capacity coupling and cascading-failure simulation",
        "zh": "压力—容量耦合与级联失效模拟"
      },
      "question": {
        "en": "How do extreme-rainfall disruptions trigger cascading failures in metro networks, and which nodes and paths govern system resilience?",
        "zh": "极端降雨扰动如何触发地铁网络级联失效，哪些关键节点与脆弱路径主导系统韧性？"
      },
      "description": {
        "en": "A pressure–capacity coupled metro network is examined under extreme-rainfall disturbances using cascading-failure and multi-scenario simulations. Network-level analysis characterizes failure transmission, identifies critical stations and vulnerable links, and reveals systemic resilience patterns. Related work was published in Transportation Research Part D: Transport and Environment.",
        "zh": "将地铁系统建模为压力—容量耦合网络，结合极端降雨扰动开展级联失效与多情景仿真，刻画站点—区段之间的失效传导过程，识别关键节点、脆弱路径及系统韧性模式；相关成果发表于 Transportation Research Part D: Transport and Environment。"
      },
      "tags": [
        "Complex Networks",
        "Resilience",
        "Simulation"
      ],
      "image": "assets/images/metro-resilience.webp",
      "imageAlt": {
        "en": "Metro-network resilience under extreme rainfall",
        "zh": "极端降雨下地铁网络韧性研究框架"
      },
      "figureLabel": {
        "en": "Metro resilience",
        "zh": "地铁韧性"
      },
      "links": {
        "pdf": "assets/pdfs/metro.pdf",
        "paper": null,
        "code": null,
        "project": null
      },
      "descriptionHighlights": {
        "zh": [
          "压力—容量耦合网络",
          "级联失效与多情景仿真",
          "关键节点、脆弱路径及系统韧性模式"
        ],
        "en": [
          "pressure–capacity coupled metro network",
          "cascading-failure and multi-scenario simulations",
          "critical stations and vulnerable links"
        ]
      }
    },
    {
      "id": "vertical-growth",
      "date": {
        "en": "2024 – 2025",
        "zh": "2024–2025"
      },
      "title": {
        "en": "Skyscraper urbanisation and vertical urban growth",
        "zh": "摩天楼城市化与三维城市演化"
      },
      "subtitle": {
        "en": "Connecting vertical growth patterns with urban economic cycles",
        "zh": "城市垂直增长模式与经济周期"
      },
      "question": {
        "en": "How does the growth of tall buildings reshape three-dimensional urbanisation, and how does it relate to economic cycles?",
        "zh": "高层建筑增长如何塑造三维城市化进程，并与城市经济周期形成何种关联？"
      },
      "description": {
        "en": "Global tall-building and economic datasets are combined to characterize the spatiotemporal evolution of vertical urban growth and its association with economic cycles. The study extends conventional two-dimensional urban expansion analysis to a three-dimensional view of urbanisation. Related work was published in Transactions in Urban Data, Science, and Technology.",
        "zh": "融合全球高层建筑与城市经济数据，构建城市垂直增长的时空表征，分析高层建筑增长模式及其与经济周期的关联，将传统二维城市扩张研究拓展至三维城市化演进；相关成果发表于 Transactions in Urban Data, Science, and Technology。"
      },
      "tags": [
        "3D Urbanisation",
        "Urban Analytics"
      ],
      "image": "assets/images/skyscraper.webp",
      "imageAlt": {
        "en": "Global vertical urban growth and economic cycles",
        "zh": "全球城市垂直增长与经济周期"
      },
      "figureLabel": {
        "en": "Vertical urbanisation",
        "zh": "三维城市化"
      },
      "links": {
        "pdf": "assets/pdfs/skyscraper.pdf",
        "paper": null,
        "code": null,
        "project": null
      },
      "descriptionHighlights": {
        "zh": [
          "城市垂直增长的时空表征",
          "经济周期",
          "三维城市化演进"
        ],
        "en": [
          "spatiotemporal evolution of vertical urban growth",
          "economic cycles",
          "three-dimensional view of urbanisation"
        ]
      }
    }
  ],
  "publications": [
    {
      "status": "review",
      "year": null,
      "title": "Leveraging Local Observations to Infer Preschooler Neurodevelopment across the Wider City: A Two-Stage Framework of Socioeconomic Reconstruction and Graph Learning",
      "authors": "Hu, P., Shen, Y.*, Xu, Z., et al.",
      "venue": "International Journal of Health Geographics · Under review",
      "doi": null,
      "pdf": null
    },
    {
      "status": "review",
      "year": null,
      "title": "From Individuals to Streets: Identifying Health-Oriented Urban Built Environments for Preschooler Neurodevelopment",
      "authors": "Shen, Y., Hu, P.*, Xu, Z., et al.",
      "venue": "Cities",
      "doi": null,
      "pdf": null
    },
    {
      "status": "published",
      "year": "2026",
      "title": "Residential Accessibility to Indoor and Outdoor Physical Activity Facilities and Overweight/Obesity among Chinese Preschool Children in 551 Cities.",
      "authors": "Li, H., Li, C., Du, L., Hu, P., et al.",
      "venue": "Environmental Research",
      "doi": null,
      "pdf": null
    },
    {
      "status": "published",
      "year": "2026",
      "title": "How Metro Networks Respond to Extreme Rainfall: A Coupled To–Through Resilience Perspective",
      "authors": "Shen, Y.*, Hu, P., Feng, Y., Han, W.",
      "venue": "Transportation Research Part D: Transport and Environment",
      "doi": null,
      "pdf": null
    },
    {
      "status": "published",
      "year": "2025",
      "title": "Skyscraper Urbanisation: Visualising Vertical Growth, Economic Cycles and 3-D Urbanisation",
      "authors": "Shen, Y.*, Hu, P., Han, W.",
      "venue": "Transactions in Urban Data, Science, and Technology",
      "doi": null,
      "pdf": null
    },
    {
      "status": "published",
      "year": "2025",
      "title": "城市的标度效应：体量、规模与形状",
      "authors": "迈克·巴蒂，沈尧*，胡玶妍",
      "venue": "上海城市规划",
      "doi": null,
      "pdf": "assets/pdfs/urban-scaling.pdf",
      "showPdfInList": true
    }
  ],
  "experience": [
    {
      "kind": "education",
      "date": "2025.09 — 2028.06",
      "title": {
        "en": "Master’s in Urban Planning",
        "zh": "城乡规划学 · 学术型硕士"
      },
      "org": {
        "en": "Tongji University",
        "zh": "同济大学"
      },
      "detail": {
        "en": "College of Architecture and Urban Planning · Expected graduation: June 2028",
        "zh": "建筑与城市规划学院 · 预计 2028 年 6 月毕业"
      }
    },
    {
      "kind": "internship",
      "date": "2026.03 — 2026.06",
      "title": {
        "en": "AI Algorithm & Solutions Intern",
        "zh": "AI算法与解决方案实习生"
      },
      "org": {
        "en": "SenseTime · Quantum City project",
        "zh": "商汤科技 · “量子城市”项目"
      },
      "detail": {
        "en": "Hierarchical urban flood-response agents · physics–data fusion forecasting · decision support",
        "zh": "层级式城市防汛智能体、机理—数据融合预测与调度决策支持"
      }
    },
    {
      "kind": "education",
      "date": "2020.09 — 2025.06",
      "title": {
        "en": "Bachelor’s in Urban Planning",
        "zh": "城乡规划 · 本科"
      },
      "org": {
        "en": "Tongji University",
        "zh": "同济大学"
      },
      "detail": {
        "en": "College of Architecture and Urban Planning",
        "zh": "建筑与城市规划学院"
      }
    },
    {
      "kind": "education",
      "date": "2022.09 — 2024.06",
      "title": {
        "en": "Minor in Artificial Intelligence",
        "zh": "人工智能 · 辅修"
      },
      "org": {
        "en": "Tongji University",
        "zh": "同济大学"
      },
      "detail": {
        "en": "College of Electronics and Information Engineering",
        "zh": "电子与信息工程学院"
      }
    }
  ],
  "conferences": [
    {
      "name": "18th ASPA",
      "detail": {
        "en": "Oral presentation · The University of Hong Kong",
        "zh": "口头报告 · 香港大学"
      }
    },
    {
      "name": "18th IFOU",
      "detail": {
        "en": "Oral presentation · Tsinghua University",
        "zh": "口头报告 · 清华大学"
      }
    },
    {
      "name": {
        "en": "China Annual Conference on Urban Planning 2026",
        "zh": "2026 中国城市规划年会"
      },
      "detail": {
        "en": "Poster presentation",
        "zh": "海报展示"
      }
    }
  ],
  "skills": [
    {
      "title": {
        "en": "Programming & Machine Learning",
        "zh": "编程与机器学习"
      },
      "items": [
        "Python",
        "Scikit-learn",
        "Predictive Modeling",
        "Feature Engineering & Model Evaluation"
      ]
    },
    {
      "title": {
        "en": "Spatial Computing & Graph Learning",
        "zh": "空间计算与图学习"
      },
      "items": [
        "GIS & Spatial Analysis",
        "Graph Learning",
        "Complex Network Modeling",
        "Spatial Extrapolation"
      ]
    },
    {
      "title": {
        "en": "Multimodal Spatial Intelligence",
        "zh": "多模态空间智能"
      },
      "items": [
        "LLM-based Semantic Parsing",
        "VLM-based Visual Annotation",
        "Multimodal Data Fusion",
        "3D Urban Semantics"
      ]
    },
    {
      "title": {
        "en": "Dynamic Modeling & Agentic Systems",
        "zh": "动态建模与智能体系统"
      },
      "items": [
        "Mechanistic State Modeling",
        "Residual Learning",
        "Scenario Simulation",
        "Multi-Agent Coordination"
      ]
    }
  ]
};
