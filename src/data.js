export const NAV_LINKS = [
  { href: '#platforme', label: 'Plateforme' },
  { href: '#zero-trust', label: 'Architecture Zero-Trust' },
  { href: '#secteurs', label: 'Secteurs' },
  { href: '#tarifs', label: 'Tarifs' },
  { href: '#api', label: 'Documentation API' },
]

export const HERO_BASH_LINES = [
  { t: 'nexum@sec-runner:~/ops$ nmap -sS -T4 10.0.0.0/24 --open', c: 'prompt' },
  { t: '[OK] 254 hôtes scannés — 3 ports exposés détectés', c: 'ok' },
  { t: 'nexum@sec-runner:~/ops$ nft add rule inet fw prerouting ct state new drop', c: 'prompt' },
  { t: '[INFO] Règle nftables appliquée — flux entrants filtrés', c: 'info' },
  { t: '[WARN] SYN flood 185.220.101.4 -> :443 (14.2 Gbps)', c: 'warn' },
  { t: 'nexum@sec-runner:~/ops$ nexum isolate --pid 4821 --reason=anomaly', c: 'prompt' },
  { t: '[ACTION] Process 4821 isolé — IP bloquée en 0.004s', c: 'prompt' },
  { t: 'nexum@sec-runner:~/ops$ ss -tulnp | grep LISTEN', c: 'prompt' },
  { t: '[SUCCESS] Périmètre sécurisé. Intégrité système : 100%', c: 'ok' },
]

export const PILLARS = [
  {
    title: 'Moteur IA Prédictif',
    desc: 'Nexum Core AI analyse le comportement des flux pour détecter les attaques Zero-Day encore inconnues.',
    icon: 'ai',
  },
  {
    title: 'Exécution & Remédiation',
    desc: 'Déploiement instantané de règles de blocage automatiques, sans intervention humaine.',
    icon: 'code',
  },
  {
    title: 'Architecture Zero-Trust',
    desc: 'Vérification continue de chaque requête, utilisateur et microservice. Jamais de confiance implicite.',
    icon: 'shieldCheck',
  },
  {
    title: 'Visibilité & Télémétrie 24/7',
    desc: 'Cartographie complète et permanente de votre surface d’attaque en temps réel.',
    icon: 'radar',
  },
]

export const CAPABILITIES = [
  { title: "Détection d'Intrusions", desc: 'IDS/IPS temps réel, signatures et comportement unifiés.', icon: 'pulse' },
  { title: 'Protection DDoS Multi-Couches', desc: 'Absorption volumétrique et filtrage applicatif L3 à L7.', icon: 'wave' },
  { title: 'Chiffrement Quantum-Résistant', desc: 'AES-256 et TLS 1.3, prêt pour la cryptographie post-quantique.', icon: 'lock' },
  { title: "Contrôle d'Accès Granulaire", desc: 'RBAC et IAM fins, au niveau utilisateur comme microservice.', icon: 'users' },
  { title: 'Analyse Statique & Dynamique', desc: 'DevSecOps intégré : scan du code à chaque commit et runtime.', icon: 'code' },
  { title: 'Audit de Conformité Automatisé', desc: 'Rapports ISO, SOC 2, RGPD et PCI-DSS générés en continu.', icon: 'doc' },
]

export const SECTORS = [
  { title: 'SaaS & Startups Tech', desc: 'Protection des API et environnements Cloud.' },
  { title: 'FinTech & Banques', desc: 'Conformité PCI-DSS, sécurité transactionnelle.' },
  { title: 'Santé & Biotech', desc: 'Protection des données patients, HIPAA / HDS.' },
  { title: 'E-Commerce', desc: 'Disponibilité haute performance, anti-scraping.' },
  { title: 'Infrastructures Critiques', desc: 'Sécurisation des systèmes industriels et OT.' },
  { title: 'Équipes Distribuées', desc: 'Accès distant sécurisé et télétravail Zero-Trust.' },
]

export const LOGOS = ['QUANTUMLEAF', 'HELIOS BANK', 'MEDVAULT', 'ORBITAL', 'NORTHWIND', 'SYNAPSE']

export const CASES = [
  { quote: '"-99.4 % de faux positifs dès la première semaine"', who: 'Directeur Sécurité (RSSI), FinTech européenne' },
  { quote: '"Déploiement complet sur 400 serveurs en moins de 45 minutes"', who: 'VP Engineering, Plateforme SaaS' },
  { quote: '"Zéro interruption de service lors d\'une attaque DDoS massive"', who: 'CTO, E-commerce' },
]

export const PRICING = [
  {
    name: 'Starter',
    sub: 'Développeurs & Startups',
    amount: 'Gratuit',
    features: ["Jusqu'à 5 nœuds", 'Scan de vulnérabilités quotidien', 'Alertes temps réel', 'Documentation API complète'],
    cta: 'Commencer',
    featured: false,
  },
  {
    name: 'Pro',
    sub: 'Entreprises en croissance',
    amount: '299 €',
    amountSuffix: '/ mois',
    features: ["Jusqu'à 50 nœuds", 'Remédiation automatique Bash/API', 'Support 24/7', 'Télémétrie avancée & rapports', 'Intégrations CI/CD natives'],
    cta: 'Choisir Pro',
    featured: true,
  },
  {
    name: 'Enterprise',
    sub: 'Grands Comptes',
    amount: 'Sur devis',
    features: ['Infrastructure illimitée', 'SOC dédié', 'SLA 99.99 %', 'Conformité sur mesure', 'Ingénieur security success'],
    cta: 'Nous contacter',
    featured: false,
  },
]

export const INTEGRATIONS = ['AWS', 'Google Cloud', 'Azure', 'Docker', 'Kubernetes', 'GitHub Actions', 'Linux', 'Slack']

export const TRUST_ITEMS = [
  { title: 'ISO 27001', desc: "Management de la sécurité de l'information" },
  { title: 'SOC 2 Type II', desc: 'Contrôles audités en continu' },
  { title: 'RGPD', desc: 'Souveraineté et minimisation des données' },
  { title: 'Bug Bounty', desc: 'Programme de divulgation actif' },
]

export const FAQ_ITEMS = [
  {
    q: "Quel est l'impact CPU de l'agent Nexum ?",
    a: "L'agent fonctionne en mode eBPF côté noyau et consomme moins de 1 % de CPU sur des charges de production standard. Aucun redémarrage de services n'est requis lors du déploiement.",
  },
  {
    q: 'Où sont stockées et traitées mes données ?',
    a: 'Vous choisissez la région de résidence des données (UE, US, APAC). Les métadonnées de télémétrie sont chiffrées au repos et en transit, avec option de traitement 100 % on-premise pour l’offre Enterprise.',
  },
  {
    q: 'Comment fonctionne la réversibilité ?',
    a: 'Toutes les configurations, règles et politiques sont exportables au format YAML et JSON. Aucun verrou propriétaire : vous pouvez migrer vos règles vers un autre outil à tout moment, sans dépendance.',
  },
  {
    q: 'Quel est le délai de confinement réel ?',
    a: 'Le temps moyen mesuré sur nos clients en production est de 3,8 ms entre la détection comportementale et l’isolation effective du conteneur ou le blocage de l’IP source.',
  },
  {
    q: 'Comment signaler une vulnérabilité ?',
    a: 'Via notre programme Bug Bounty actif. Nous nous engageons à répondre sous 48 h ouvrées et à créditer les chercheurs responsables.',
  },
]