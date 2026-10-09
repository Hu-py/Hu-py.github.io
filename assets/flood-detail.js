/* =========================================================
   SenseTime / Quantum City
   Urban Flood-Response Agent Project Detail
   修改入口：
   1. 中英文文案：details.en / details.zh
   2. 图片：assets/images/sensetime/
      - framework.webp
      - coordination.webp
      - algorithm.webp
      - workflow.webp
   ========================================================= */
(() => {
'use strict';
/* =========================================================
   1. PROJECT CONTENT
   ========================================================= */
const details = {
  /* =========================
     ENGLISH
     ========================= */
  en: {
    label: 'SenseTime · Quantum City',
    date: 'Mar – Jun 2026',
    title: 'Urban Flood-Response Agent for the Suzhou Creek Watershed',
    summary:
      'A hierarchical flood-response framework integrating multi-gateway coordination, physics-based modeling, and spatiotemporal prediction for model-informed urban drainage decisions.',
    close: 'Close project details',
    view: 'Open full-resolution figure',
    nav: 'Project sections',
    sections: [
      /* ---------------------------------------------------
         01 OVERVIEW
         --------------------------------------------------- */
      {
        id: 'overview',
        heading: 'Overview',
        eyebrow: 'PROJECT OVERVIEW',
        title:
          'From local drainage response to watershed-scale coordination',
        paragraphs: [
          'Urban flood response is inherently a coupled spatiotemporal system problem. Rainfall first changes local runoff and drainage demand, while pumping operations, tributary conditions, and main-river water levels jointly determine whether local systems can safely discharge water. Decisions made by one drainage unit may therefore alter hydraulic conditions elsewhere in the watershed.',
          'This project develops a hierarchical flood-response agent for the Suzhou Creek watershed. It combines watershed-scale coordination, local drainage execution, physics-based response modeling, and data-driven state prediction to support rolling flood assessment and model-informed dispatch.',
          'The modeled system contains 27 drainage systems, 31 pumping stations, and 105 main-river segments. Half-hour river water levels are used as the primary prediction target, allowing the system to represent spatially distributed water-level responses rather than only a small number of monitoring stations.'
        ],
        highlights: [
          [
            'Large gateway',
            'Watershed-level coordination, hydraulic-capacity assessment, operating-boundary allocation, and cross-system prioritization.'
          ],
          [
            'Small gateway',
            'Local sensing, drainage-demand assessment, execution planning, resource operation, and state feedback.'
          ],
          [
            'Prediction engine',
            'Physics-based response modeling combined with conservative data-driven residual correction.'
          ]
        ]
      },
      /* ---------------------------------------------------
         02 SYSTEM ARCHITECTURE
         --------------------------------------------------- */
      {
        id: 'architecture',
        heading: 'System Architecture',
        eyebrow: 'SYSTEM DESIGN',
        title:
          'A hierarchical agent connecting local drainage states with watershed-scale decisions',
        paragraphs: [
          'The system is organized into three interacting layers: local drainage intelligence, watershed-level coordination, and predictive modeling.',
          'Each small gateway maintains a local representation of rainfall, surface ponding, pipe-network conditions, storage capacity, pumping resources, and receiving-water states. The large gateway aggregates these distributed states together with tributary and main-river conditions to form a watershed-scale operational view.',
          'Prediction acts as a shared environmental model between the two levels. Rather than producing forecasts independently from decision-making, predicted states continuously enter risk assessment, operating-boundary allocation, execution, and feedback.'
        ],
        image: 'framework',
        alt:
          'Hierarchical physical modeling and gradient-boosted spatiotemporal prediction for global and local water-management agents',
        caption:
          'System architecture · local drainage intelligence, watershed-scale coordination, physical modeling, and predictive support.'
      },
      /* ---------------------------------------------------
         03 COORDINATION
         --------------------------------------------------- */
      {
        id: 'coordination',
        heading: 'Coordination Mechanism',
        eyebrow: 'MULTI-GATEWAY COORDINATION',
        title:
          'Separating local autonomy from system-wide constraints',
        paragraphs: [
          'A fully centralized architecture would require the basin-level agent to resolve every local operational detail, while a fully decentralized system could generate locally optimal decisions that violate shared river or discharge constraints. The large–small gateway architecture separates these two responsibilities.',
          'The large gateway represents the watershed coordination layer. It maintains system-wide awareness, evaluates shared hydraulic capacity, determines drainage priorities, and defines feasible operating boundaries.',
          'The small gateway represents the local execution layer. It evaluates local drainage demand, protected objects, storage capacity, and operational resources, then generates and executes local response plans within the boundary assigned by the large gateway.',
          'Coordination proceeds as a rolling loop of demand reporting, boundary allocation, plan coordination, execution, and feedback correction.'
        ],
        flow:
          'Demand → Boundary → Execution → Feedback',
        steps: [
          [
            'Demand reporting',
            'Small gateways report drainage demand, local risk conditions, waiting tolerance, and priority protection requirements.'
          ],
          [
            'Boundary allocation',
            'The large gateway determines feasible discharge capacity, operating windows, priorities, and shared hydraulic constraints.'
          ],
          [
            'Plan coordination',
            'Local execution alternatives are checked against watershed-scale constraints and cross-system resource requirements.'
          ],
          [
            'Feedback correction',
            'Observed drainage outcomes and state deviations update the next operating boundary and execution strategy.'
          ]
        ],
        image: 'coordination',
        alt:
          'Global and local agent responsibilities and the demand-boundary-execution-feedback coordination loop',
        caption:
          'Large–small gateway coordination · watershed-scale constraints and local execution are connected through continuous bidirectional feedback.'
      },
      /* ---------------------------------------------------
         04 ALGORITHM
         --------------------------------------------------- */
      {
        id: 'algorithm',
        heading: 'Algorithm Design',
        eyebrow: 'HYBRID PREDICTION',
        title:
          'Combining interpretable physical response with conservative data-driven correction',
        paragraphs: [
          'The forecasting model follows a hybrid principle: use physical modeling to represent interpretable system response, and use machine learning only to correct the remaining unexplained error.',
          'The physical component represents the main response chain from local runoff and storage to pumping discharge, river-segment exchange, hydraulic decay, and upstream/downstream boundary influence. Its purpose is not only prediction, but also to preserve a model structure that remains interpretable and usable for scenario testing.',
          'A gradient-boosted residual model is then trained on the difference between the physical prediction and the target state. The final feature set deliberately excludes event-time trend variables and instead relies on information that remains available for subsequent forecasting, including physical predictions, hydraulic states, runoff inputs, spatial position, and upstream/downstream boundary signals.',
          'The final forecast therefore combines an interpretable physical prior with conservative data-driven correction rather than replacing the hydraulic process with a black-box estimator.'
        ],
        algorithmBlocks: [
          {
            label: 'A',
            title: 'Physics-Based Response Modeling',
            text:
              'The physical model abstracts the flood-response chain into rainfall and local inflow, surface runoff and storage, pumping discharge, river propagation, and water-level response.',
            flow:
              'Rainfall → Runoff → Storage → Pumping → River Propagation → Water Level'
          },
          {
            label: 'B',
            title: 'Gradient-Boosted Residual Learning',
            text:
              'Residual learning captures systematic deviations that remain unexplained by the physical process, using boundary conditions, physical predictions, hydraulic states, spatial structure, and historical information.',
            flow:
              'Physical Prior → Residual Learning → Conservative Correction → Final Forecast'
          }
        ],
        metrics: [
          ['1.048 → 0.434 m', 'All-segment RMSE'],
          ['0.686 → 0.514 m', 'Control-segment RMSE'],
          ['30 min', 'Prediction interval']
        ],
        note:
          'Validation performance is evaluated using temporally held-out observations. The machine-learning component corrects residual error rather than replacing the physical response process.',
        image: 'algorithm',
        alt:
          'Physics-based modeling and gradient-boosted residual learning combined into a water-level prediction framework',
        caption:
          'Algorithm design · interpretable physical dynamics provide the prior response, while gradient boosting learns conservative residual corrections.'
      },
      /* ---------------------------------------------------
         05 AGENT WORKFLOW
         --------------------------------------------------- */
      {
        id: 'workflow',
        heading: 'Agent Workflow',
        eyebrow: 'OPERATIONAL LOOP',
        title:
          'From early warning to live execution and post-event learning',
        paragraphs: [
          'Prediction is embedded into an operational agent loop rather than treated as a standalone forecasting task. As a rainfall event develops, the system progressively moves from coarse early-stage forecasting toward increasingly fine-grained and event-driven control.',
          'Prediction frequency, decision granularity, and operational authority evolve with the state of the event. Execution feedback is returned to the system so that subsequent forecasts, priorities, and operating boundaries can be continuously updated.'
        ],
        timeline: [
          ['01', 'Warning', 'Event initialization and system-wide monitoring.'],
          ['02', 'Hourly forecast', 'Rolling state prediction and preliminary drainage planning.'],
          ['03', 'Near-term refinement', 'Higher-frequency prediction and fine-grained scheduling.'],
          ['04', 'Live execution', 'Operational commands and rolling adjustment based on observed response.'],
          ['05', 'Emergency escalation', 'Systemic-risk identification and emergency resource coordination.'],
          ['06', 'Recovery', 'Controlled drainage, restoration, and residual-risk management.'],
          ['07', 'Post-event review', 'Prediction diagnostics, parameter correction, and strategy updating.']
        ],
        image: 'workflow',
        alt:
          'End-to-end workflow for intelligent storage and drainage scheduling in the Suzhou Creek basin',
        caption:
          'Operational workflow · warning, forecasting, near-term refinement, execution, escalation, recovery, and post-event review.'
      },
      /* ---------------------------------------------------
         06 RESULTS
         --------------------------------------------------- */
      {
        id: 'results',
        heading: 'Results & Diagnostics',
        eyebrow: 'MODEL PERFORMANCE',
        title:
          'Improving predictive accuracy without abandoning physical interpretability',
        paragraphs: [
          'The hybrid model substantially improves predictive accuracy over the physical baseline. Across all river segments, validation RMSE decreases from 1.048 m to 0.434 m. For control-station segments, RMSE decreases from 0.686 m to 0.514 m.',
          'Feature analysis indicates that the upstream boundary water level provides the strongest residual-correction signal, followed by the physical-model prediction and its deviation from the initial water level. This suggests that system-wide river response is influenced not only by local runoff and pumping, but also strongly by upstream and downstream boundary conditions.',
          'Diagnostics also reveal comparatively larger errors in several downstream segments. Further improvements are therefore expected to come primarily from better extrapolatable boundary conditions, effective river-storage geometry, and operational information rather than simply increasing machine-learning complexity.'
        ],
        metrics: [
          ['0.434 m', 'Final validation RMSE'],
          ['58.6%', 'RMSE reduction'],
          ['0.514 m', 'Control-segment RMSE']
        ],
        resultCards: [
          [
            'Predictive improvement',
            'Residual learning substantially reduces error across most river segments while preserving the physical baseline.'
          ],
          [
            'Boundary sensitivity',
            'Upstream boundary conditions emerge as the strongest corrective signal in the residual model.'
          ],
          [
            'Remaining limitation',
            'Downstream uncertainty remains, highlighting the importance of improved boundary and river-storage information.'
          ]
        ]
      },
      /* ---------------------------------------------------
         07 CONTRIBUTION
         --------------------------------------------------- */
      {
        id: 'contribution',
        heading: 'My Contribution',
        eyebrow: 'ROLE & CONTRIBUTION',
        title:
          'Bridging system architecture, predictive modeling, and decision-oriented prototyping',
        contributions: [
          [
            'System abstraction & agent architecture',
            'Translated the urban flood-response problem into a hierarchical large–small gateway architecture linking watershed-scale coordination with local drainage intelligence. Defined the interaction logic between global constraints, local demand, execution, and feedback.'
          ],
          [
            'Physics–data fusion modeling',
            'Developed the conceptual and computational pipeline connecting interpretable physical response modeling with gradient-boosted residual correction, with an emphasis on maintaining scenario interpretability while improving predictive accuracy.'
          ],
          [
            'Prediction-to-decision integration',
            'Connected predicted environmental states with the agent decision loop, allowing forecasts to support risk assessment, drainage-boundary allocation, local execution, and rolling correction rather than remaining isolated model outputs.'
          ],
          [
            'Solution design & communication',
            'Structured the overall technical solution and developed system diagrams and prototype-oriented visualizations to communicate the architecture across algorithm, planning, and application perspectives.'
          ]
        ]
      }
    ]
  },
  /* =========================
     中文
     ========================= */
  zh: {
    label: '商汤科技 · 量子城市',
    date: '2026.03–2026.06',
    title: '面向苏州河流域的城市防汛智能体',
    summary:
      '融合大小网关协同、物理机理建模与时空预测，构建面向城市洪涝状态研判与模型驱动调度的层级式防汛智能体。',
    close: '关闭项目详情',
    view: '查看高清原图',
    nav: '项目章节',
    sections: [
      /* ---------------------------------------------------
         01 项目概览
         --------------------------------------------------- */
      {
        id: 'overview',
        heading: '项目概览',
        eyebrow: 'PROJECT OVERVIEW',
        title:
          '从局地排水响应走向流域尺度协同',
        paragraphs: [
          '城市防汛本质上是一个跨尺度耦合的时空系统问题。降雨首先改变地表汇流与局地排水需求，而泵站运行、支流状态及主河道水位又共同决定局部系统是否具备安全外排条件，因此单一片区的排水决策可能进一步改变流域其他位置的水力状态。',
          '本项目面向苏州河流域构建层级式城市防汛智能体，将流域级统筹、片区级执行、物理响应建模与数据驱动预测结合起来，支持洪涝状态滚动研判与模型驱动的调度决策。',
          '案例覆盖 27 个排水系统、31 个泵站和 105 段主线河道，并以河道半小时水位作为主要预测对象，从而由少量监测站点预测扩展至连续河段空间状态表达。'
        ],
        highlights: [
          [
            '大网关',
            '承担流域级统筹、系统承载能力判断、调度边界分配与跨片区优先级协调。'
          ],
          [
            '小网关',
            '负责局地感知、排水需求研判、执行方案生成、资源组织与状态反馈。'
          ],
          [
            '预测引擎',
            '结合可解释物理响应与保守的数据驱动残差修正，提供未来状态预测。'
          ]
        ]
      },
      /* ---------------------------------------------------
         02 系统架构
         --------------------------------------------------- */
      {
        id: 'architecture',
        heading: '系统架构',
        eyebrow: 'SYSTEM DESIGN',
        title:
          '连接局地排水状态与流域尺度决策的层级式智能体',
        paragraphs: [
          '系统由三个相互连接的层次构成：局地排水智能、流域级统筹以及预测模型。',
          '小网关维护地块或片区尺度的降雨、积水、管网、调蓄、泵站及受纳水体状态；大网关进一步汇聚各小网关状态，并结合支流与苏州河主河道条件形成流域尺度运行态势。',
          '状态预测位于二者之间，作为大小网关共享的环境表征。预测结果并非独立输出，而是持续进入风险判断、调度边界分配、方案执行与滚动反馈过程。'
        ],
        image: 'framework',
        alt:
          '大小网关协同的物理模型与梯度提升时空预测框架',
        caption:
          '系统架构 · 局地排水智能、流域级统筹、物理建模与预测支撑。'
      },
      /* ---------------------------------------------------
         03 协同机制
         --------------------------------------------------- */
      {
        id: 'coordination',
        heading: '协同机制',
        eyebrow: 'MULTI-GATEWAY COORDINATION',
        title:
          '在局地自主性与流域整体约束之间建立协同',
        paragraphs: [
          '如果采用完全中心化的调度方式，大网关需要直接处理所有局地执行细节；而完全分布式的方式又可能导致各片区形成局部最优、但违反主河道承载能力或外排约束的方案。因此，本项目通过大小网关划分流域统筹与局地执行两类职责。',
          '大网关承担流域级统筹，负责形成全局态势、评估共享水力承载能力、确定分区优先序，并向下分配可执行的调度边界。',
          '小网关承担片区级执行，结合本地排水需求、重点保护对象、调蓄能力和可用资源生成执行方案，并在大网关约束范围内实施。',
          '二者通过持续的信息交换形成滚动闭环，使局地方案能够在满足流域整体约束的前提下保持一定执行自主性。'
        ],
        flow:
          '需求上报 → 边界下达 → 方案协调 → 执行反馈',
        steps: [
          [
            '需求上报',
            '小网关上报排水需求、本地风险状态、可等待时长及重点保护对象。'
          ],
          [
            '边界下达',
            '大网关根据流域承载条件确定允许排水量、时间窗口、优先级及共享约束。'
          ],
          [
            '方案协调',
            '在流域约束下校核各片区执行方案，并协调跨系统资源和排水次序。'
          ],
          [
            '反馈修正',
            '实际排水效果与状态偏差返回系统，用于修正下一轮调度边界与执行策略。'
          ]
        ],
        image: 'coordination',
        alt:
          '大小网关职责划分及需求—边界—执行—反馈协同闭环',
        caption:
          '大小网关协同 · 通过双向信息流连接流域级约束与片区级执行。'
      },
      /* ---------------------------------------------------
         04 算法设计
         --------------------------------------------------- */
      {
        id: 'algorithm',
        heading: '算法设计',
        eyebrow: 'HYBRID PREDICTION',
        title:
          '以可解释物理响应为基础进行保守的数据驱动修正',
        paragraphs: [
          '预测模型遵循一个核心原则：利用物理模型解释系统响应，再利用机器学习仅修正物理模型尚未解释的剩余误差。',
          '物理部分依次刻画片区产流与蓄水、泵站排水、河段之间的扰动交换与回落，以及上下游边界水位影响。其作用不仅是获得预测结果，更重要的是保留能够用于情景推演和机制解释的物理过程结构。',
          '在此基础上，以物理预测与真实目标之间的剩余偏差为学习对象，引入梯度提升模型进行残差修正。最终版本不使用单场事件的时间位置趋势，而优先采用物理预测、水力状态、产流、空间位置以及上下游边界等后续预测阶段仍然可获得的特征。',
          '因此，最终模型并非以黑箱方法替代物理过程，而是形成“物理先验 + 保守残差修正”的融合预测结构。'
        ],
        algorithmBlocks: [
          {
            label: 'A',
            title: '可解释物理响应建模',
            text:
              '将洪涝响应抽象为降雨与片区来水、地表汇流与蓄水、泵站外排、河段传播及水位响应等连续过程。',
            flow:
              '降雨 → 汇流 → 蓄水 → 泵站排水 → 河段传播 → 水位响应'
          },
          {
            label: 'B',
            title: '梯度提升残差学习',
            text:
              '以物理模型尚未解释的系统性误差作为学习对象，引入边界条件、物理预测、水力状态、空间结构与历史信息进行残差修正。',
            flow:
              '物理先验 → 残差学习 → 保守修正 → 最终预测'
          }
        ],
        metrics: [
          ['1.048 → 0.434 m', '全河段 RMSE'],
          ['0.686 → 0.514 m', '控制站段 RMSE'],
          ['30 min', '预测时间尺度']
        ],
        note:
          '验证采用时间切分后的独立验证集；数据驱动模块用于修正物理模型剩余偏差，而非替代物理响应过程。',
        image: 'algorithm',
        alt:
          '物理机理与梯度提升残差学习协同的时空预测技术路线',
        caption:
          '算法设计 · 以可解释物理过程形成先验响应，再通过梯度提升学习保守残差修正。'
      },
      /* ---------------------------------------------------
         05 智能体运行流程
         --------------------------------------------------- */
      {
        id: 'workflow',
        heading: '智能体运行流程',
        eyebrow: 'OPERATIONAL LOOP',
        title:
          '从前期预警到实况执行与灾后学习',
        paragraphs: [
          '状态预测并不是一个独立的模型输出，而是被嵌入完整的 Agent 运行闭环中。随着降雨过程不断演进，系统由前期较粗粒度的预测预案逐步转向临近阶段的精细预测与事件驱动调度。',
          '预测频率、决策粒度与执行方式会随事件状态变化，并通过实际执行反馈持续更新下一轮预测、风险判断和调度边界。'
        ],
        timeline: [
          ['01', '预警启动', '建立事件任务并启动全域状态监测。'],
          ['02', '小时级预测', '滚动预测系统状态并形成初步排水预案。'],
          ['03', '临近精调', '提高预测频率并开展分钟级精细调度。'],
          ['04', '实况执行', '下发调度指令，并根据实时效果持续调整。'],
          ['05', '应急升级', '识别系统性风险并组织应急资源与重点保护。'],
          ['06', '退水恢复', '组织有序退水、设施恢复及残余风险管理。'],
          ['07', '复盘优化', '诊断预测偏差并更新模型参数与策略库。']
        ],
        image: 'workflow',
        alt:
          '苏州河流域蓄排平衡智能调度全流程',
        caption:
          '运行闭环 · 从预警、预测、调度到执行反馈、恢复与灾后复盘。'
      },
      /* ---------------------------------------------------
         06 结果与诊断
         --------------------------------------------------- */
      {
        id: 'results',
        heading: '结果与诊断',
        eyebrow: 'MODEL PERFORMANCE',
        title:
          '在保留物理可解释性的同时提升预测精度',
        paragraphs: [
          '融合模型相较纯物理模型显著提高了预测精度。验证集中，全河段 RMSE 由 1.048 m 降至 0.434 m，控制站段 RMSE 由 0.686 m 降至 0.514 m。',
          '特征贡献分析显示，上游边界水位是最重要的残差修正信号，其次为物理预测水位以及相对初始水位变化。这表明河道水位演化不仅受局地产流和泵站排水控制，也明显受到上下游边界条件影响。',
          '诊断结果同时表明，下游部分河段仍存在较大误差。因此，后续性能提升更应优先依赖可外推的边界条件、河段有效库容和实际运行信息，而不是单纯增加机器学习模型复杂度。'
        ],
        metrics: [
          ['0.434 m', '最终验证 RMSE'],
          ['58.6%', 'RMSE 降幅'],
          ['0.514 m', '控制站段 RMSE']
        ],
        resultCards: [
          [
            '预测性能提升',
            '残差学习显著压缩大部分河段预测误差，同时保留物理模型作为系统响应基线。'
          ],
          [
            '边界条件敏感性',
            '上游边界水位成为最重要的修正信息，反映跨河段边界作用的重要性。'
          ],
          [
            '剩余局限',
            '部分下游河段仍存在较高误差，提示需要进一步补充有效边界与河道库容信息。'
          ]
        ]
      },
      /* ---------------------------------------------------
         07 我的贡献
         --------------------------------------------------- */
      {
        id: 'contribution',
        heading: '我的贡献',
        eyebrow: 'ROLE & CONTRIBUTION',
        title:
          '连接系统架构、预测算法与决策型原型设计',
        contributions: [
          [
            '系统抽象与智能体架构',
            '将城市防汛问题抽象为“流域级大网关—片区级小网关”的层级式智能体架构，明确全局约束、本地需求、方案执行与反馈修正之间的交互逻辑。'
          ],
          [
            '机理—数据融合建模',
            '构建可解释物理响应与梯度提升残差修正相结合的预测技术路线，在提高预测精度的同时保留情景模拟和机制解释能力。'
          ],
          [
            '预测—决策衔接',
            '将未来环境状态嵌入智能体运行闭环，使预测结果能够进一步支撑风险研判、调度边界分配、片区执行与滚动修正。'
          ],
          [
            '解决方案与技术表达',
            '组织整体技术方案，并形成系统架构、大小网关协同、算法设计及运行流程等可视化表达，用于连接算法、规划与实际应用场景。'
          ]
        ]
      }
    ]
  }
};
/* =========================================================
   2. IMAGE PATH
   ========================================================= */
const imagePath = name =>
  'assets/images/sensetime/' + name + '.webp';
/* =========================================================
   3. BASIC DOM HELPERS
   ========================================================= */
function el(tag, cls, text) {
  const element = document.createElement(tag);
  if (cls) {
    element.className = cls;
  }
  if (text !== undefined && text !== null) {
    element.textContent = text;
  }
  return element;
}
function figure(name, alt, caption, copy) {
  const root = el('figure', 'flood-figure');
  const link = el('a', 'flood-figure-link');
  link.href = imagePath(name);
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
  link.setAttribute(
    'aria-label',
    copy.view + ': ' + alt
  );
  const image = el('img', 'flood-figure-image');
  image.src = imagePath(name);
  image.alt = alt;
  image.loading = 'eager';
  image.decoding = 'async';
  link.append(image);
  const captionNode = el(
    'figcaption',
    '',
    caption + ' · ' + copy.view
  );
  root.append(
    link,
    captionNode
  );
  return root;
}
/* =========================================================
   4. QUICK FACTS
   ========================================================= */
/* =========================================================
   5. METRICS
   ========================================================= */
function metrics(items) {
  const grid = el(
    'dl',
    'flood-metrics'
  );
  items.forEach(([value, label]) => {
    const pair = el(
      'div',
      'flood-metric'
    );
    pair.append(
      el('dt', '', label),
      el('dd', '', value)
    );
    grid.append(pair);
  });
  return grid;
}
/* =========================================================
   6. PARAGRAPHS
   ========================================================= */
function paragraphs(items) {
  const root = el(
    'div',
    'flood-copy'
  );
  items.forEach(text => {
    root.append(
      el('p', '', text)
    );
  });
  return root;
}
/* =========================================================
   7. HIGHLIGHT CARDS
   ========================================================= */
function highlights(items) {
  const grid = el(
    'div',
    'flood-highlight-grid'
  );
  items.forEach(([heading, text]) => {
    const card = el(
      'article',
      'flood-highlight-card'
    );
    card.append(
      el('h4', '', heading),
      el('p', '', text)
    );
    grid.append(card);
  });
  return grid;
}
/* =========================================================
   8. COORDINATION STEPS
   ========================================================= */
function steps(items) {
  const list = el(
    'ol',
    'flood-steps'
  );
  items.forEach(([heading, text]) => {
    const li = el('li');
    li.append(
      el('h4', '', heading),
      el('p', '', text)
    );
    list.append(li);
  });
  return list;
}
/* =========================================================
   9. ALGORITHM BLOCKS
   ========================================================= */
function algorithmBlocks(items) {
  const grid = el(
    'div',
    'flood-algorithm-grid'
  );
  items.forEach(item => {
    const card = el(
      'article',
      'flood-algorithm-card'
    );
    const label = el(
      'span',
      'flood-algorithm-label',
      item.label
    );
    card.append(
      label,
      el('h4', '', item.title),
      el('p', '', item.text),
      el(
        'div',
        'flood-algorithm-flow',
        item.flow
      )
    );
    grid.append(card);
  });
  return grid;
}
/* =========================================================
   10. WORKFLOW TIMELINE
   ========================================================= */
function timeline(items) {
  const list = el(
    'ol',
    'flood-timeline'
  );
  items.forEach(([number, heading, text]) => {
    const li = el('li');
    li.append(
      el(
        'span',
        'flood-timeline-number',
        number
      ),
      el('h4', '', heading),
      el('p', '', text)
    );
    list.append(li);
  });
  return list;
}
/* =========================================================
   11. RESULT CARDS
   ========================================================= */
function resultCards(items) {
  const grid = el(
    'div',
    'flood-result-grid'
  );
  items.forEach(([heading, text]) => {
    const card = el(
      'article',
      'flood-result-card'
    );
    card.append(
      el('h4', '', heading),
      el('p', '', text)
    );
    grid.append(card);
  });
  return grid;
}
/* =========================================================
   12. CONTRIBUTIONS
   ========================================================= */
function contributions(items) {
  const list = el(
    'ol',
    'flood-contributions'
  );
  items.forEach(([heading, text]) => {
    const li = el('li');
    li.append(
      el('h4', '', heading),
      el('p', '', text)
    );
    list.append(li);
  });
  return list;
}
/* =========================================================
   13. STATE
   ========================================================= */
let dialog = null;
let trigger = null;
let previousOverflow = '';
/* =========================================================
   14. OPEN PROJECT DETAIL
   ========================================================= */
window.openFloodDetail = (
  language,
  opener
) => {
  if (dialog?.open) {
    return;
  }
  const lang =
    language === 'zh'
      ? 'zh'
      : 'en';
  const copy =
    details[lang];
  trigger = opener;
  /* -------------------------------------------------------
     Dialog
     ------------------------------------------------------- */
  dialog = el(
    'dialog',
    'flood-dialog'
  );
  dialog.lang =
    lang === 'zh'
      ? 'zh-CN'
      : 'en';
  dialog.setAttribute(
    'aria-labelledby',
    'flood-detail-title'
  );
  dialog.setAttribute(
    'aria-describedby',
    'flood-detail-summary'
  );
  /* -------------------------------------------------------
     Top bar
     ------------------------------------------------------- */
  const top = el(
    'div',
    'flood-dialog-bar'
  );
  const brand = el(
    'span',
    '',
    copy.label
  );
  const close = el(
    'button',
    'flood-close',
    '×'
  );
  close.type = 'button';
  close.setAttribute(
    'aria-label',
    copy.close
  );
  close.autofocus = true;
  close.addEventListener(
    'click',
    () => dialog.close()
  );
  top.append(
    brand,
    close
  );
  dialog.append(top);
  /* -------------------------------------------------------
     Main body
     ------------------------------------------------------- */
  const body = el(
    'div',
    'flood-dialog-body'
  );
  /* =======================================================
     HERO
     ======================================================= */
  const hero = el(
    'header',
    'flood-hero'
  );
  hero.append(
    el(
      'p',
      'flood-kicker',
      copy.date
    )
  );
  const title = el(
    'h2',
    '',
    copy.title
  );
  title.id =
    'flood-detail-title';
  const summary = el(
    'p',
    'flood-summary',
    copy.summary
  );
  summary.id =
    'flood-detail-summary';
  hero.append(
    title,
    summary
  );
  body.append(hero);
  /* =======================================================
     SECTION NAVIGATION
     ======================================================= */
  const nav = el(
    'nav',
    'flood-section-nav'
  );
  nav.setAttribute(
    'aria-label',
    copy.nav
  );
  copy.sections.forEach(
    (section, index) => {
      const button = el(
        'button',
        '',
        String(index + 1).padStart(2, '0') +
        ' ' +
        section.heading
      );
      button.type = 'button';
      button.addEventListener(
        'click',
        () => {
          const target =
            document.getElementById(
              'flood-detail-' +
              section.id
            );
          if (!target) {
            return;
          }
          target.scrollIntoView({
            block: 'start',
            behavior:
              matchMedia(
                '(prefers-reduced-motion: reduce)'
              ).matches
                ? 'auto'
                : 'smooth'
          });
        }
      );
      nav.append(button);
    }
  );
  body.append(nav);
  /* =======================================================
     SECTIONS
     ======================================================= */
  copy.sections.forEach(
    (sectionData, index) => {
      const section = el(
        'section',
        'flood-detail-section'
      );
      section.id =
        'flood-detail-' +
        sectionData.id;
      /* Number */
      section.append(
        el(
          'span',
          'flood-section-number',
          String(index + 1).padStart(
            2,
            '0'
          )
        )
      );
      /* Eyebrow */
      if (sectionData.eyebrow) {
        section.append(
          el(
            'p',
            'flood-section-eyebrow',
            sectionData.eyebrow
          )
        );
      }
      /* Main section heading */
      section.append(
        el(
          'h3',
          '',
          sectionData.heading
        )
      );
      /* Section title */
      if (sectionData.title) {
        section.append(
          el(
            'h4',
            'flood-section-title',
            sectionData.title
          )
        );
      }
      /* Paragraphs */
      if (
        sectionData.paragraphs
      ) {
        section.append(
          paragraphs(
            sectionData.paragraphs
          )
        );
      }
      /* Overview highlights */
      if (
        sectionData.highlights
      ) {
        section.append(
          highlights(
            sectionData.highlights
          )
        );
      }
      /* Coordination core flow */
      if (sectionData.flow) {
        section.append(
          el(
            'div',
            'flood-core-flow',
            sectionData.flow
          )
        );
      }
      /* Coordination steps */
      if (sectionData.steps) {
        section.append(
          steps(sectionData.steps)
        );
      }
      /* Algorithm blocks */
      if (
        sectionData.algorithmBlocks
      ) {
        section.append(
          algorithmBlocks(
            sectionData.algorithmBlocks
          )
        );
      }
      /* Workflow timeline */
      if (sectionData.timeline) {
        section.append(
          timeline(
            sectionData.timeline
          )
        );
      }
      /* Metrics */
      if (sectionData.metrics) {
        section.append(
          metrics(
            sectionData.metrics
          )
        );
      }
      /* Metric note */
      if (sectionData.note) {
        section.append(
          el(
            'p',
            'flood-metric-note',
            sectionData.note
          )
        );
      }
      /* Result cards */
      if (
        sectionData.resultCards
      ) {
        section.append(
          resultCards(
            sectionData.resultCards
          )
        );
      }
      /* Figure */
      if (sectionData.image) {
        section.append(
          figure(
            sectionData.image,
            sectionData.alt,
            sectionData.caption,
            copy
          )
        );
      }
      /* Contributions */
      if (
        sectionData.contributions
      ) {
        section.append(
          contributions(
            sectionData.contributions
          )
        );
      }
      body.append(section);
    }
  );
  /* =======================================================
     APPEND DIALOG
     ======================================================= */
  dialog.append(body);
  document.body.append(dialog);
  /* Lock page scroll */
  previousOverflow =
    document.body.style.overflow;
  document.body.style.overflow =
    'hidden';
  /* -------------------------------------------------------
     Restore focus / scroll on close
     ------------------------------------------------------- */
  dialog.addEventListener(
    'close',
    () => {
      document.body.style.overflow =
        previousOverflow;
      dialog.remove();
      if (trigger?.isConnected) {
        trigger.focus({
          preventScroll: true
        });
      }
      dialog = null;
    },
    { once: true }
  );
  /* -------------------------------------------------------
     Click backdrop to close
     ------------------------------------------------------- */
  let backdropStart = false;
  dialog.addEventListener(
    'pointerdown',
    event => {
      const rect =
        dialog.getBoundingClientRect();
      backdropStart =
        event.clientX < rect.left ||
        event.clientX > rect.right ||
        event.clientY < rect.top ||
        event.clientY > rect.bottom;
    }
  );
  dialog.addEventListener(
    'click',
    event => {
      const rect =
        dialog.getBoundingClientRect();
      const outside =
        event.clientX < rect.left ||
        event.clientX > rect.right ||
        event.clientY < rect.top ||
        event.clientY > rect.bottom;
      if (
        backdropStart &&
        outside
      ) {
        dialog.close();
      }
      backdropStart = false;
    }
  );
  /* -------------------------------------------------------
     Open
     ------------------------------------------------------- */
  dialog.showModal();
};
})();