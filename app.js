/* ============================================================
   AWS FİNAL ÇALIŞMA ASİSTANI — app.js
   Deploy-ready, Vanilla JS, LocalStorage tabanlı
   ============================================================ */

'use strict';

/* ─── VERİ HAVUZU ─────────────────────────────────────────── */
const RAW_DATA = [
  /* ════════════════ aws-13-14 ════════════════ */
  {id:"13-1",video:"aws-13-14",konu:"Serverless",zorluk:"kolay",soru:"Serverless mimaride temel sorumluluk kime aittir?",secenekler:{A:"Müşteriye",B:"Bulut sağlayıcısına",C:"Veritabanı yöneticisine",D:"Son kullanıcıya"},dogru:"B",aciklama:"Serverless yapıda altyapı ve operasyon sorumluluğu büyük ölçüde bulut sağlayıcısındadır.",cikma_ihtimali:70},
  {id:"13-2",video:"aws-13-14",konu:"Serverless",zorluk:"kolay",soru:"Serverless kavramı için aşağıdakilerden hangisi doğrudur?",secenekler:{A:"Sunucu hiç yoktur",B:"Fiziksel sunucu kullanılamaz",C:"Sunucu yönetimi kullanıcıdadır",D:"Sunucu vardır ancak yönetimi sağlayıcıdadır"},dogru:"D",aciklama:"Serverless'ta sunucular vardır ancak yönetimi sağlayıcı üstlenir.",cikma_ihtimali:75},
  {id:"13-3",video:"aws-13-14",konu:"Serverless",zorluk:"orta",soru:"Serverless yapılarda ölçeklenme nasıl gerçekleşir?",secenekler:{A:"Elle",B:"Haftalık",C:"Otomatik",D:"Yıllık"},dogru:"C",aciklama:"Trafik ve yük durumuna göre otomatik ölçeklenir.",cikma_ihtimali:72},
  {id:"13-4",video:"aws-13-14",konu:"Serverless",zorluk:"orta",soru:"Serverless yapılarda maliyetlendirme genellikle nasıl yapılır?",secenekler:{A:"Sabit ücret",B:"Yıllık abonelik",C:"Kullanım başına ödeme",D:"Sunucu sayısına göre"},dogru:"C",aciklama:"Kullandığın kadar öde modeli uygulanır.",cikma_ihtimali:78},
  {id:"13-5",video:"aws-13-14",konu:"Serverless",zorluk:"kolay",soru:"Serverless yapılarda bakım ve güncelleme işlemleri nasıl gerçekleştirilir?",secenekler:{A:"Müşteri yapar",B:"Manuel yapılır",C:"Otomatik yönetilir",D:"Yapılmaz"},dogru:"C",aciklama:"Bakım ve güncellemeler servis sağlayıcı tarafından yapılır.",cikma_ihtimali:65},
  {id:"13-6",video:"aws-13-14",konu:"Serverless",zorluk:"orta",soru:"Serverless mimarilerde öne çıkan iş hedefi aşağıdakilerden hangisidir?",secenekler:{A:"Donanım yönetmek",B:"İş değerine odaklanmak",C:"Sunucu kurmak",D:"Veri merkezi işletmek"},dogru:"B",aciklama:"İş mantığına ve iş değerine odaklanmak amaçlanır.",cikma_ihtimali:70},
  {id:"13-7",video:"aws-13-14",konu:"Fargate",zorluk:"kolay",soru:"AWS Fargate'in temel görevi nedir?",secenekler:{A:"DNS yönetimi",B:"Container yönetimi ve otomatik ölçekleme",C:"Veritabanı yedekleme",D:"Kimlik doğrulama"},dogru:"B",aciklama:"Fargate container çalışma altyapısını yönetir.",cikma_ihtimali:80},
  {id:"13-8",video:"aws-13-14",konu:"Fargate",zorluk:"orta",soru:"Fargate en çok hangi ortamlarla ilişkilendirilmiştir?",secenekler:{A:"S3 ve Route53",B:"ECS ve EKS",C:"RDS ve DynamoDB",D:"SNS ve SQS"},dogru:"B",aciklama:"Fargate ECS ve EKS ortamlarında container yönetiminde kullanılır.",cikma_ihtimali:82},
  {id:"13-9",video:"aws-13-14",konu:"Lambda",zorluk:"kolay",soru:"Lambda hangi mimari kategorisinde değerlendirilir?",secenekler:{A:"Monolitik",B:"Serverless",C:"Mainframe",D:"Bare Metal"},dogru:"B",aciklama:"Lambda sunucusuz çalışma modelinin temel servislerinden biridir.",cikma_ihtimali:90},
  {id:"13-10",video:"aws-13-14",konu:"Lambda",zorluk:"orta",soru:"S3'e yüklenen bir görselin yeniden boyutlandırılması senaryosunda hangi servis kullanılabilir?",secenekler:{A:"Lambda",B:"CloudFront",C:"Route53",D:"IAM"},dogru:"A",aciklama:"Lambda olay tetiklemeli işlemler gerçekleştirebilir.",cikma_ihtimali:95},
  {id:"13-11",video:"aws-13-14",konu:"Lambda",zorluk:"orta",soru:"Belirli saatlerde sanal makineleri otomatik kapatmak için hangi servis kullanılabilir?",secenekler:{A:"ECR",B:"Lambda",C:"SQS",D:"Aurora"},dogru:"B",aciklama:"Lambda zamanlanmış görevleri çalıştırabilir.",cikma_ihtimali:92},
  {id:"13-12",video:"aws-13-14",konu:"Aurora",zorluk:"kolay",soru:"Aurora aşağıdaki veritabanlarından hangilerini destekler?",secenekler:{A:"Oracle ve SQL Server",B:"MongoDB ve Cassandra",C:"MySQL ve PostgreSQL",D:"Redis ve DynamoDB"},dogru:"C",aciklama:"Aurora MySQL ve PostgreSQL uyumludur.",cikma_ihtimali:88},
  {id:"13-13",video:"aws-13-14",konu:"Aurora",zorluk:"orta",soru:"Aurora için aşağıdakilerden hangisi belirtilmiştir?",secenekler:{A:"NoSQL veritabanıdır",B:"Serverless kullanılabilir",C:"Sadece Oracle çalıştırır",D:"Container servisidir"},dogru:"B",aciklama:"Aurora serverless kullanım senaryolarını destekler.",cikma_ihtimali:82},
  {id:"13-14",video:"aws-13-14",konu:"RDS",zorluk:"kolay",soru:"RDS hangi tür veritabanları için kullanılır?",secenekler:{A:"Relational",B:"Graph",C:"Time-Series",D:"Blockchain"},dogru:"A",aciklama:"RDS ilişkisel veritabanı hizmetidir.",cikma_ihtimali:85},
  {id:"13-15",video:"aws-13-14",konu:"RDS",zorluk:"orta",soru:"RDS üzerinde çalıştırılabileceği belirtilen veritabanlarından biri hangisidir?",secenekler:{A:"MongoDB",B:"Oracle",C:"Neo4j",D:"Cassandra"},dogru:"B",aciklama:"Oracle ilişkisel veritabanı olarak RDS üzerinde çalıştırılabilir.",cikma_ihtimali:78},
  {id:"13-16",video:"aws-13-14",konu:"DynamoDB",zorluk:"kolay",soru:"DynamoDB hangi veritabanı kategorisindedir?",secenekler:{A:"Relational",B:"NoSQL",C:"Graph",D:"Object"},dogru:"B",aciklama:"DynamoDB AWS'in NoSQL veritabanıdır.",cikma_ihtimali:90},
  {id:"13-17",video:"aws-13-14",konu:"EventBridge",zorluk:"orta",soru:"Bir işlemin birden fazla ardışık olaya ayrılması durumunda hangi servis kullanılabilir?",secenekler:{A:"SNS",B:"EventBridge",C:"CloudWatch",D:"ECR"},dogru:"B",aciklama:"EventBridge olay tabanlı yönlendirme sağlar.",cikma_ihtimali:80},
  {id:"13-18",video:"aws-13-14",konu:"SQS",zorluk:"kolay",soru:"SQS servisinin temel amacı nedir?",secenekler:{A:"Bildirim yayını",B:"Mesaj kuyruklama",C:"Veri analizi",D:"CDN hizmeti"},dogru:"B",aciklama:"SQS kuyruk tabanlı mesajlaşma sağlar.",cikma_ihtimali:88},
  {id:"13-19",video:"aws-13-14",konu:"SNS",zorluk:"kolay",soru:"SNS servisinin temel amacı nedir?",secenekler:{A:"Bildirim göndermek",B:"Container çalıştırmak",C:"Dosya depolamak",D:"Subnet oluşturmak"},dogru:"A",aciklama:"SNS bildirim ve yayın servisidir.",cikma_ihtimali:88},
  {id:"13-20",video:"aws-13-14",konu:"MQ",zorluk:"orta",soru:"MQ servisi hangi amaçla anılmıştır?",secenekler:{A:"Kuyruklama",B:"CDN",C:"DNS",D:"Monitoring"},dogru:"A",aciklama:"MQ mesaj kuyruklama amacıyla kullanılır.",cikma_ihtimali:65},
  {id:"13-21",video:"aws-13-14",konu:"Kinesis",zorluk:"orta",soru:"Kinesis hangi senaryolarda kullanılır?",secenekler:{A:"Veri akışı",B:"Kimlik doğrulama",C:"DNS çözümleme",D:"Container registry"},dogru:"A",aciklama:"Kinesis streaming veri işleme için kullanılır.",cikma_ihtimali:78},
  {id:"13-22",video:"aws-13-14",konu:"Apache Kafka",zorluk:"orta",soru:"Apache Kafka hangi kavramla ilişkilendirilmiştir?",secenekler:{A:"Streaming veri",B:"Relational database",C:"Container orchestration",D:"CDN"},dogru:"A",aciklama:"Kafka veri akış sistemleri için kullanılır.",cikma_ihtimali:70},
  {id:"13-23",video:"aws-13-14",konu:"API Gateway",zorluk:"kolay",soru:"API Gateway'in temel görevi nedir?",secenekler:{A:"Uygulamalar arasında haberleşme sağlamak",B:"Veri yedeklemek",C:"Container oluşturmak",D:"DNS yönetmek"},dogru:"A",aciklama:"API Gateway servisler arası iletişimde kullanılır.",cikma_ihtimali:85},
  {id:"13-24",video:"aws-13-14",konu:"API Gateway",zorluk:"orta",soru:"API Gateway için belirtilen iki temel API türü hangileridir?",secenekler:{A:"SOAP ve GraphQL",B:"RESTful ve WebSocket",C:"TCP ve UDP",D:"FTP ve SMTP"},dogru:"B",aciklama:"RESTful ve WebSocket API'leri desteklenir.",cikma_ihtimali:88},
  {id:"13-25",video:"aws-13-14",konu:"RESTful API",zorluk:"orta",soru:"Web uygulamalarında en yaygın kullanılan API yaklaşımı hangisidir?",secenekler:{A:"RESTful",B:"Telnet",C:"SSH",D:"SNMP"},dogru:"A",aciklama:"HTTP tabanlı web uygulamalarında RESTful yaygındır.",cikma_ihtimali:82},
  {id:"13-26",video:"aws-13-14",konu:"WebSocket",zorluk:"orta",soru:"Gerçek zamanlı veri güncellemelerinde hangi API yaklaşımı tercih edilir?",secenekler:{A:"RESTful",B:"SOAP",C:"WebSocket",D:"Batch API"},dogru:"C",aciklama:"WebSocket sürekli iletişim sağlar.",cikma_ihtimali:80},
  {id:"13-27",video:"aws-13-14",konu:"WebSocket",zorluk:"orta",soru:"Oyun içi sohbet ve canlı iletişim uygulamalarında hangi teknoloji daha uygundur?",secenekler:{A:"RESTful",B:"WebSocket",C:"FTP",D:"SMTP"},dogru:"B",aciklama:"WebSocket gerçek zamanlı iletişim için kullanılır.",cikma_ihtimali:78},
  {id:"13-28",video:"aws-13-14",konu:"GraphQL",zorluk:"orta",soru:"Veri odaklı API yaklaşımı olarak hangisi belirtilmiştir?",secenekler:{A:"GraphQL",B:"POP3",C:"SNMP",D:"LDAP"},dogru:"A",aciklama:"GraphQL veri sorgulama odaklı API modelidir.",cikma_ihtimali:72},
  {id:"13-29",video:"aws-13-14",konu:"AppSync",zorluk:"orta",soru:"Mobil uygulamalarda veri senkronizasyonu için kullanılan servis hangisidir?",secenekler:{A:"AppSync",B:"Inspector",C:"Athena",D:"SES"},dogru:"A",aciklama:"AppSync veri senkronizasyonu amacıyla kullanılır.",cikma_ihtimali:75},
  {id:"13-30",video:"aws-13-14",konu:"Serverless",zorluk:"orta",soru:"Mikroservis ve veri işleme senaryolarında hangi yaklaşım daha uygun görülmüştür?",secenekler:{A:"Mainframe",B:"Serverless",C:"Bare Metal",D:"FTP"},dogru:"B",aciklama:"Otomasyon ve operasyon kolaylığı sağlar.",cikma_ihtimali:70},
  {id:"13-31",video:"aws-13-14",konu:"CI/CD",zorluk:"orta",soru:"CI/CD süreçleri en çok hangi alanla ilişkilidir?",secenekler:{A:"DevOps",B:"DNS",C:"Yedekleme",D:"CDN"},dogru:"A",aciklama:"CI/CD DevOps kültürünün önemli bir parçasıdır.",cikma_ihtimali:80},
  {id:"13-32",video:"aws-13-14",konu:"Disaster Recovery",zorluk:"kolay",soru:"Disaster Recovery kavramının Türkçe karşılığı nedir?",secenekler:{A:"Veri sıkıştırma",B:"Felaket kurtarma",C:"Yük dengeleme",D:"Kimlik doğrulama"},dogru:"B",aciklama:"DR, felaket kurtarma anlamına gelir.",cikma_ihtimali:72},
  {id:"13-33",video:"aws-13-14",konu:"Disaster Recovery",zorluk:"orta",soru:"Disaster Recovery stratejilerinin temel amacı nedir?",secenekler:{A:"Maliyeti artırmak",B:"Sistemi felaket sonrasında geri yüklemek",C:"Veritabanını silmek",D:"Yeni kullanıcı eklemek"},dogru:"B",aciklama:"Felaket sonrası iş sürekliliğini sağlar.",cikma_ihtimali:85},
  {id:"13-34",video:"aws-13-14",konu:"High Availability",zorluk:"kolay",soru:"High Availability kavramı neyi ifade eder?",secenekler:{A:"Yüksek depolama",B:"Yüksek erişilebilirlik",C:"Yüksek maliyet",D:"Yüksek gecikme"},dogru:"B",aciklama:"Sistemin erişilebilir kalmasını ifade eder.",cikma_ihtimali:85},
  {id:"13-36",video:"aws-13-14",konu:"High Availability",zorluk:"orta",soru:"Tek AZ kullanımında belirtilen erişilebilirlik oranı hangisidir?",secenekler:{A:"%95",B:"%99",C:"%99.7",D:"%100"},dogru:"C",aciklama:"Derste tek AZ için %99.7 değeri verilmiştir.",cikma_ihtimali:88},
  {id:"13-37",video:"aws-13-14",konu:"High Availability",zorluk:"orta",soru:"İki AZ kullanımında belirtilen erişilebilirlik oranı hangisidir?",secenekler:{A:"%99.9",B:"%98",C:"%95",D:"%90"},dogru:"A",aciklama:"İki AZ ile daha yüksek erişilebilirlik sağlanır.",cikma_ihtimali:88},
  {id:"13-38",video:"aws-13-14",konu:"Disaster Recovery",zorluk:"orta",soru:"Aşağıdakilerden hangisi felaket sebebi olarak örnek verilmiştir?",secenekler:{A:"Savaş",B:"Yeni kullanıcı kaydı",C:"Versiyon yükseltme",D:"Tema değişikliği"},dogru:"A",aciklama:"Savaş, deprem ve teknik arızalar örnek olarak verilmiştir.",cikma_ihtimali:75},
  {id:"13-39",video:"aws-13-14",konu:"Disaster Recovery",zorluk:"orta",soru:"Aşağıdakilerden hangisi insan kaynaklı felaket örneğidir?",secenekler:{A:"Deprem",B:"Sel",C:"Yanlış işlem yapmak",D:"Fırtına"},dogru:"C",aciklama:"İnsan hataları sistem kesintilerine yol açabilir.",cikma_ihtimali:72},
  {id:"13-40",video:"aws-13-14",konu:"Backup",zorluk:"orta",soru:"Backup ile Disaster Recovery arasındaki temel fark nedir?",secenekler:{A:"Backup tüm sistemi içerir",B:"DR sadece veriyi korur",C:"Backup veriyi korur, DR tüm sistemi kapsar",D:"Aralarında fark yoktur"},dogru:"C",aciklama:"Backup veri odaklı, DR ise sistem odaklıdır.",cikma_ihtimali:85},
  {id:"13-41",video:"aws-13-14",konu:"RPO",zorluk:"zor",soru:"Recovery Point Objective (RPO) neyi ifade eder?",secenekler:{A:"Sistemin ayağa kalkma süresini",B:"Kabul edilen veri kaybı noktasını",C:"Sunucu maliyetini",D:"CPU kullanımını"},dogru:"B",aciklama:"RPO kabul edilebilir veri kaybı miktarını ifade eder.",cikma_ihtimali:95},
  {id:"13-42",video:"aws-13-14",konu:"RTO",zorluk:"zor",soru:"Recovery Time Objective (RTO) neyi ifade eder?",secenekler:{A:"Sistemin yeniden çalışır hale gelme süresini",B:"Veritabanı boyutunu",C:"Kullanıcı sayısını",D:"Snapshot sayısını"},dogru:"A",aciklama:"RTO sistemin toparlanma süresidir.",cikma_ihtimali:95},
  {id:"13-43",video:"aws-13-14",konu:"RTO",zorluk:"zor",soru:"Downtime süresiyle doğrudan ilişkili kavram hangisidir?",secenekler:{A:"RPO",B:"RTO",C:"CIDR",D:"TTL"},dogru:"B",aciklama:"RTO kabul edilen kesinti süresiyle ilgilidir.",cikma_ihtimali:92},
  {id:"13-44",video:"aws-13-14",konu:"Business Continuity",zorluk:"orta",soru:"Business Continuity Plan (BCP) neyi amaçlar?",secenekler:{A:"İş sürekliliğini sağlamak",B:"Yedekleri silmek",C:"Container oluşturmak",D:"DNS yönetmek"},dogru:"A",aciklama:"İş sürekliliği planı kesintisiz hizmet hedefler.",cikma_ihtimali:80},
  {id:"13-45",video:"aws-13-14",konu:"Business Continuity",zorluk:"orta",soru:"BCP oluşturulmadan önce hangi çalışma yapılmalıdır?",secenekler:{A:"Risk değerlendirmesi",B:"CDN kurulumu",C:"Subnet oluşturma",D:"API geliştirme"},dogru:"A",aciklama:"Risk analizi iş sürekliliğinin temelidir.",cikma_ihtimali:75},
  {id:"13-46",video:"aws-13-14",konu:"Disaster Recovery",zorluk:"orta",soru:"Aşağıdakilerden hangisi Disaster Recovery stratejilerinden biridir?",secenekler:{A:"Backup and Restore",B:"CIDR Planning",C:"Subnetting",D:"DNS Forwarding"},dogru:"A",aciklama:"Backup and Restore yaygın DR yöntemidir.",cikma_ihtimali:82},
  {id:"13-47",video:"aws-13-14",konu:"Disaster Recovery",zorluk:"orta",soru:"Pilot Light yaklaşımında RTO ve RPO genel olarak nasıldır?",secenekler:{A:"Saatler seviyesinde",B:"Aylar seviyesinde",C:"Saniyeler seviyesinde",D:"Sıfırdır"},dogru:"A",aciklama:"Pilot Light daha yavaş toparlanma senaryolarındandır.",cikma_ihtimali:85},
  {id:"13-48",video:"aws-13-14",konu:"Disaster Recovery",zorluk:"orta",soru:"Warm Standby yaklaşımında sistem toparlanması genellikle hangi sürede gerçekleşir?",secenekler:{A:"Dakikalar içinde",B:"Haftalar içinde",C:"Aylar içinde",D:"Yıllar içinde"},dogru:"A",aciklama:"Warm Standby daha hızlı geri dönüş sağlar.",cikma_ihtimali:85},
  {id:"13-49",video:"aws-13-14",konu:"Disaster Recovery",zorluk:"zor",soru:"Gerçek zamanlıya en yakın felaket kurtarma yaklaşımı hangisidir?",secenekler:{A:"Backup and Restore",B:"Pilot Light",C:"Warm Standby",D:"Hot Standby"},dogru:"D",aciklama:"Hot Standby en düşük RTO ve RPO değerlerini sağlar.",cikma_ihtimali:92},
  {id:"13-50",video:"aws-13-14",konu:"S3",zorluk:"orta",soru:"Disaster Recovery senaryolarında kullanılabilecek servislerden biri hangisidir?",secenekler:{A:"S3",B:"WorkSpaces",C:"Chime",D:"Connect"},dogru:"A",aciklama:"S3 yedekleme ve veri koruma amaçlı kullanılabilir.",cikma_ihtimali:72},
  {id:"13-51",video:"aws-13-14",konu:"CloudFormation",zorluk:"orta",soru:"CloudFormation'ın temel amacı nedir?",secenekler:{A:"Kod ile altyapı oluşturmak",B:"CDN sağlamak",C:"Veri akışı yönetmek",D:"Bildirim göndermek"},dogru:"A",aciklama:"CloudFormation altyapıyı kod ile oluşturur.",cikma_ihtimali:85},
  {id:"13-52",video:"aws-13-14",konu:"CloudFront",zorluk:"orta",soru:"CloudFormation ile karıştırılmaması gerektiği belirtilen CDN servisi hangisidir?",secenekler:{A:"CloudFront",B:"Lambda",C:"SNS",D:"Kinesis"},dogru:"A",aciklama:"CloudFront içerik dağıtım ağı (CDN) servisidir.",cikma_ihtimali:78},
  {id:"13-53",video:"aws-13-14",konu:"CloudWatch",zorluk:"kolay",soru:"CloudWatch'ın temel görevi nedir?",secenekler:{A:"Monitoring",B:"DNS",C:"Container Registry",D:"Kimlik doğrulama"},dogru:"A",aciklama:"CloudWatch izleme ve gözlemleme servisidir.",cikma_ihtimali:80},
  {id:"13-54",video:"aws-13-14",konu:"Snapshot",zorluk:"orta",soru:"Disaster Recovery kapsamında hangi yedekleme yöntemi anılmıştır?",secenekler:{A:"Snapshot",B:"FTP Upload",C:"SMTP Relay",D:"ARP Cache"},dogru:"A",aciklama:"Snapshot'lar geri dönüş senaryolarında kullanılır.",cikma_ihtimali:82},
  {id:"13-55",video:"aws-13-14",konu:"Multi-AZ",zorluk:"zor",soru:"Bir Availability Zone arızalandığında diğerinin hizmet vermeye devam etmesi hangi kavramla ilişkilidir?",secenekler:{A:"Multi-AZ",B:"Single Tenant",C:"Cold Storage",D:"Static Hosting"},dogru:"A",aciklama:"Multi-AZ yapılar yüksek erişilebilirlik sağlar.",cikma_ihtimali:90},
  {id:"13-56",video:"aws-13-14",konu:"Güvenlik",zorluk:"orta",soru:"Şifreler ve kullanıcı yetkilendirmeleri kimin sorumluluğundadır?",secenekler:{A:"AWS",B:"CloudFront",C:"Müşteri",D:"Route53"},dogru:"C",aciklama:"Paylaşımlı sorumluluk modelinde bu alan müşteri sorumluluğundadır.",cikma_ihtimali:85},
  {id:"13-57",video:"aws-13-14",konu:"Disaster Recovery",zorluk:"orta",soru:"Felaket kurtarma planlarında kritik personel belirlenmesinin amacı nedir?",secenekler:{A:"Maaş belirlemek",B:"Yetki devri ve süreklilik sağlamak",C:"Subnet oluşturmak",D:"DNS yönetmek"},dogru:"B",aciklama:"Kritik personel yokluğunda iş sürekliliği korunur.",cikma_ihtimali:72},
  {id:"13-58",video:"aws-13-14",konu:"RPO",zorluk:"zor",soru:"Felaket sonrasında en son geri dönülebilen veri noktası hangi kavramla ifade edilir?",secenekler:{A:"RTO",B:"RPO",C:"AZ",D:"TTL"},dogru:"B",aciklama:"RPO veri kaybı açısından geri dönüş noktasını tanımlar.",cikma_ihtimali:95},
  {id:"13-59",video:"aws-13-14",konu:"RTO",zorluk:"zor",soru:"Felaket sonrasında sistemin yeniden çalışır hale gelmesine kadar geçen süre hangi kavramdır?",secenekler:{A:"RPO",B:"Snapshot",C:"RTO",D:"Backup Window"},dogru:"C",aciklama:"RTO toparlanma süresini ifade eder.",cikma_ihtimali:95},

  /* ════════════════ aws-9 ════════════════ */
  {id:"9-1",video:"aws-9",konu:"CloudFormation",zorluk:"kolay",soru:"AWS CloudFormation'ın temel amacı nedir?",secenekler:{A:"Veritabanı yönetmek",B:"Altyapıyı kod ile oluşturmak ve yönetmek",C:"Log analiz etmek",D:"DNS yönetimi yapmak"},dogru:"B",aciklama:"CloudFormation altyapıyı kod ile kurmak için kullanılır.",cikma_ihtimali:88},
  {id:"9-2",video:"aws-9",konu:"CloudFormation",zorluk:"kolay",soru:"CloudFormation template'leri hangi formatlarda yazılabilir?",secenekler:{A:"XML ve CSV",B:"JSON ve YAML",C:"TXT ve HTML",D:"Python ve Java"},dogru:"B",aciklama:"CloudFormation JSON veya YAML destekler.",cikma_ihtimali:85},
  {id:"9-3",video:"aws-9",konu:"CloudFormation",zorluk:"orta",soru:"CloudFormation'da stack kavramı neyi ifade eder?",secenekler:{A:"Tek bir EC2 instance",B:"Birden fazla kaynağın mantıksal grubu",C:"Veritabanı bağlantısı",D:"Sadece IAM kullanıcıları"},dogru:"B",aciklama:"Stack, kaynakların birlikte yönetildiği yapıdır.",cikma_ihtimali:88},
  {id:"9-4",video:"aws-9",konu:"CloudFormation",zorluk:"orta",soru:"CloudFormation template'lerinin S3'e yüklenmesinin nedeni nedir?",secenekler:{A:"Daha hızlı internet sağlamak",B:"Diğer kullanıcılarla paylaşım ve erişim sağlamak",C:"EC2 performansını artırmak",D:"DNS yönetmek"},dogru:"B",aciklama:"Template'ler ekip tarafından erişilebilir olması için S3'te tutulur.",cikma_ihtimali:75},
  {id:"9-5",video:"aws-9",konu:"CloudFormation",zorluk:"orta",soru:"CloudFormation'da rollback ne işe yarar?",secenekler:{A:"Yeni kaynak oluşturur",B:"Eski versiyona geri döner",C:"Veriyi siler",D:"Network oluşturur"},dogru:"B",aciklama:"Rollback hata durumunda eski duruma dönmeyi sağlar.",cikma_ihtimali:82},
  {id:"9-6",video:"aws-9",konu:"CloudFormation",zorluk:"zor",soru:"CloudFormation'da stack yapısının hiyerarşik kullanılmasının avantajı nedir?",secenekler:{A:"Daha az maliyet",B:"Modüler ve yönetilebilir yapı",C:"Daha hızlı internet",D:"Sadece frontend geliştirme"},dogru:"B",aciklama:"Hiyerarşik stack yapısı modülerlik sağlar.",cikma_ihtimali:78},
  {id:"9-7",video:"aws-9",konu:"Terraform",zorluk:"kolay",soru:"Terraform hangi amaçla kullanılır?",secenekler:{A:"Veri analizi",B:"Infrastructure as Code",C:"Video işleme",D:"DNS yönetimi"},dogru:"B",aciklama:"Terraform altyapıyı kod ile yönetir.",cikma_ihtimali:80},
  {id:"9-8",video:"aws-9",konu:"Terraform",zorluk:"kolay",soru:"Terraform dosyalarının uzantısı nedir?",secenekler:{A:".json",B:".yaml",C:".tf",D:".xml"},dogru:"C",aciklama:"Terraform .tf uzantılı dosyalar kullanır.",cikma_ihtimali:75},
  {id:"9-9",video:"aws-9",konu:"Terraform",zorluk:"orta",soru:"Terraform'da modül kullanmanın avantajı nedir?",secenekler:{A:"Daha az RAM kullanımı",B:"Kodun yeniden kullanılabilir olması",C:"Daha hızlı internet",D:"Sadece frontend geliştirme"},dogru:"B",aciklama:"Modüller tekrar kullanılabilir yapı sağlar.",cikma_ihtimali:78},
  {id:"9-10",video:"aws-9",konu:"Terraform",zorluk:"zor",soru:"Terraform'da data source ne amaçla kullanılır?",secenekler:{A:"Yeni kullanıcı oluşturmak",B:"Mevcut kaynaklardan veri çekmek",C:"Log silmek",D:"DNS değiştirmek"},dogru:"B",aciklama:"Data source mevcut kaynaklardan bilgi alır.",cikma_ihtimali:72},
  {id:"9-11",video:"aws-9",konu:"EC2",zorluk:"kolay",soru:"EC2 instance oluştururken kullanılan AMI nedir?",secenekler:{A:"Network protokolü",B:"Makine imajı",C:"Veritabanı",D:"Firewall"},dogru:"B",aciklama:"AMI, instance için işletim sistemi imajıdır.",cikma_ihtimali:85},
  {id:"9-12",video:"aws-9",konu:"EC2",zorluk:"orta",soru:"EC2 instance erişimi için kullanılan anahtar nedir?",secenekler:{A:"IAM Role",B:"Key Pair",C:"Subnet",D:"CIDR"},dogru:"B",aciklama:"Key pair SSH erişimi için kullanılır.",cikma_ihtimali:85},
  {id:"9-13",video:"aws-9",konu:"Networking",zorluk:"kolay",soru:"CIDR blokları neyi ifade eder?",secenekler:{A:"Disk boyutu",B:"IP adres aralığı",C:"CPU gücü",D:"Veritabanı tipi"},dogru:"B",aciklama:"CIDR IP adres aralıklarını tanımlar.",cikma_ihtimali:82},
  {id:"9-14",video:"aws-9",konu:"VPC",zorluk:"kolay",soru:"VPC nedir?",secenekler:{A:"Veritabanı servisi",B:"Sanal özel ağ",C:"Load balancer",D:"DNS servisi"},dogru:"B",aciklama:"VPC AWS içindeki özel ağdır.",cikma_ihtimali:90},
  {id:"9-15",video:"aws-9",konu:"VPC",zorluk:"orta",soru:"Public ve Private subnet farkı nedir?",secenekler:{A:"Boyut farkı",B:"Internet erişimi farkı",C:"CPU farkı",D:"Disk farkı"},dogru:"B",aciklama:"Public subnet internet erişimine sahiptir.",cikma_ihtimali:90},
  {id:"9-16",video:"aws-9",konu:"Networking",zorluk:"orta",soru:"Internet Gateway ne işe yarar?",secenekler:{A:"Veritabanı yönetir",B:"VPC'yi internete bağlar",C:"CPU artırır",D:"Log tutar"},dogru:"B",aciklama:"IGW internet erişimi sağlar.",cikma_ihtimali:88},
  {id:"9-17",video:"aws-9",konu:"Security Group",zorluk:"kolay",soru:"Security Group neyi kontrol eder?",secenekler:{A:"CPU kullanımı",B:"Ağ trafiği",C:"Disk boyutu",D:"Veritabanı şeması"},dogru:"B",aciklama:"Security Group inbound/outbound trafiği kontrol eder.",cikma_ihtimali:90},
  {id:"9-18",video:"aws-9",konu:"Security",zorluk:"orta",soru:"TCP protokolü genellikle hangi amaçla kullanılır?",secenekler:{A:"Bağlantısız iletişim",B:"Güvenilir veri iletimi",C:"DNS çözümleme",D:"Disk yönetimi"},dogru:"B",aciklama:"TCP güvenilir bağlantı sağlar.",cikma_ihtimali:78},
  {id:"9-19",video:"aws-9",konu:"DevOps",zorluk:"kolay",soru:"CI/CD pipeline neyi ifade eder?",secenekler:{A:"Network yapılandırması",B:"Yazılım geliştirme ve dağıtım süreci",C:"Veritabanı yönetimi",D:"DNS çözümleme"},dogru:"B",aciklama:"CI/CD otomatik build ve deploy sürecidir.",cikma_ihtimali:82},
  {id:"9-20",video:"aws-9",konu:"CI/CD",zorluk:"orta",soru:"CodeBuild'in görevi nedir?",secenekler:{A:"Veritabanı oluşturmak",B:"Kod derlemek",C:"DNS yönetmek",D:"Firewall kurmak"},dogru:"B",aciklama:"CodeBuild kodu build eder.",cikma_ihtimali:85},
  {id:"9-21",video:"aws-9",konu:"CI/CD",zorluk:"orta",soru:"CodeDeploy ne yapar?",secenekler:{A:"Kod depolar",B:"Kod dağıtır",C:"Veritabanı yönetir",D:"Network kurar"},dogru:"B",aciklama:"CodeDeploy deployment yapar.",cikma_ihtimali:85},
  {id:"9-22",video:"aws-9",konu:"ECR",zorluk:"kolay",soru:"ECR ne için kullanılır?",secenekler:{A:"DNS",B:"Docker image repository",C:"Firewall",D:"Load balancing"},dogru:"B",aciklama:"ECR Docker image depolar.",cikma_ihtimali:82},
  {id:"9-23",video:"aws-9",konu:"ECR",zorluk:"orta",soru:"ECR lifecycle policy ne işe yarar?",secenekler:{A:"Network oluşturur",B:"Image yönetimi yapar",C:"CPU artırır",D:"Disk büyütür"},dogru:"B",aciklama:"Lifecycle policy image temizliği yapar.",cikma_ihtimali:72},
  {id:"9-24",video:"aws-9",konu:"RDS",zorluk:"kolay",soru:"RDS ne sağlar?",secenekler:{A:"Network yönetimi",B:"Yönetilen veritabanı",C:"DNS çözümleme",D:"Cache"},dogru:"B",aciklama:"RDS managed database sağlar.",cikma_ihtimali:82},
  {id:"9-25",video:"aws-9",konu:"RDS",zorluk:"orta",soru:"Read replica ne amaçla kullanılır?",secenekler:{A:"Write işlemleri artırmak",B:"Okuma performansını artırmak",C:"Disk artırmak",D:"CPU azaltmak"},dogru:"B",aciklama:"Read replica okuma yükünü dağıtır.",cikma_ihtimali:88},
  {id:"9-26",video:"aws-9",konu:"ElastiCache",zorluk:"orta",soru:"ElastiCache hangi amaçla kullanılır?",secenekler:{A:"DNS yönetimi",B:"Cache sistemi",C:"Load balancing",D:"Firewall"},dogru:"B",aciklama:"ElastiCache caching için kullanılır.",cikma_ihtimali:85},
  {id:"9-27",video:"aws-9",konu:"S3",zorluk:"kolay",soru:"S3 ne tür bir servistir?",secenekler:{A:"Compute",B:"Object storage",C:"Database",D:"Network"},dogru:"B",aciklama:"S3 object storage servisidir.",cikma_ihtimali:85},
  {id:"9-28",video:"aws-9",konu:"EFS",zorluk:"orta",soru:"EFS ne sağlar?",secenekler:{A:"Block storage",B:"Paylaşımlı dosya sistemi",C:"Cache",D:"DNS"},dogru:"B",aciklama:"EFS shared file system sağlar.",cikma_ihtimali:78},
  {id:"9-29",video:"aws-9",konu:"Networking",zorluk:"orta",soru:"Route Table ne işe yarar?",secenekler:{A:"Veritabanı yönetir",B:"Trafik yönlendirme yapar",C:"Disk büyütür",D:"CPU artırır"},dogru:"B",aciklama:"Route table trafik yönlendirir.",cikma_ihtimali:82},
  {id:"9-30",video:"aws-9",konu:"Networking",zorluk:"zor",soru:"NAT Gateway hangi durumda kullanılır?",secenekler:{A:"Public subnet için",B:"Private subnet internet çıkışı için",C:"DNS çözümleme için",D:"Cache için"},dogru:"B",aciklama:"Private subnet internet erişimi için NAT kullanır.",cikma_ihtimali:90},
  {id:"9-31",video:"aws-9",konu:"IAM",zorluk:"kolay",soru:"IAM neyi yönetir?",secenekler:{A:"Disk alanı",B:"Kullanıcı ve yetkiler",C:"CPU",D:"Network"},dogru:"B",aciklama:"IAM erişim kontrolünü yönetir.",cikma_ihtimali:92},
  {id:"9-32",video:"aws-9",konu:"IAM",zorluk:"orta",soru:"IAM Role ne işe yarar?",secenekler:{A:"Disk büyütür",B:"Geçici yetki sağlar",C:"DNS yönetir",D:"CPU artırır"},dogru:"B",aciklama:"Role geçici yetki sağlar.",cikma_ihtimali:90},
  {id:"9-33",video:"aws-9",konu:"DevOps",zorluk:"orta",soru:"Infrastructure as Code (IaC) neyi ifade eder?",secenekler:{A:"Kod yazmak",B:"Altyapıyı kod ile yönetmek",C:"Veritabanı yönetmek",D:"DNS çözmek"},dogru:"B",aciklama:"IaC altyapının kod ile yönetimidir.",cikma_ihtimali:82},
  {id:"9-34",video:"aws-9",konu:"Terraform",zorluk:"zor",soru:"Terraform ile tek komutla sistemin ayağa kalkmasının nedeni nedir?",secenekler:{A:"DNS kullanımı",B:"Tanımlı altyapı kodunun uygulanması",C:"CPU artırımı",D:"Disk genişletme"},dogru:"B",aciklama:"Kod tanımları uygulanarak sistem kurulur.",cikma_ihtimali:78},
  {id:"9-35",video:"aws-9",konu:"EC2",zorluk:"orta",soru:"SSH bağlantısı için hangi port kullanılır?",secenekler:{A:"80",B:"443",C:"22",D:"53"},dogru:"C",aciklama:"SSH portu 22'dir.",cikma_ihtimali:88},
  {id:"9-36",video:"aws-9",konu:"Networking",zorluk:"kolay",soru:"HTTP hangi portu kullanır?",secenekler:{A:"22",B:"80",C:"443",D:"25"},dogru:"B",aciklama:"HTTP port 80 kullanır.",cikma_ihtimali:85},
  {id:"9-37",video:"aws-9",konu:"Networking",zorluk:"kolay",soru:"HTTPS hangi portu kullanır?",secenekler:{A:"80",B:"22",C:"443",D:"21"},dogru:"C",aciklama:"HTTPS port 443 kullanır.",cikma_ihtimali:85},
  {id:"9-38",video:"aws-9",konu:"CloudFormation",zorluk:"zor",soru:"CloudFormation'da versiyon bilgisinin önemi nedir?",secenekler:{A:"CPU artırır",B:"Uyumluluk ve hata önleme sağlar",C:"Disk büyütür",D:"DNS yönetir"},dogru:"B",aciklama:"Versiyon hataları önlemek için önemlidir.",cikma_ihtimali:75},
  {id:"9-39",video:"aws-9",konu:"Terraform",zorluk:"orta",soru:"Terraform'da variable kullanımı ne sağlar?",secenekler:{A:"CPU artırır",B:"Dinamik yapı oluşturur",C:"Disk küçültür",D:"DNS değiştirir"},dogru:"B",aciklama:"Variable esneklik sağlar.",cikma_ihtimali:72},
  {id:"9-40",video:"aws-9",konu:"Networking",zorluk:"zor",soru:"Multi NAT Gateway kullanımı hangi durumda tercih edilir?",secenekler:{A:"Düşük maliyet",B:"High availability",C:"DNS çözümleme",D:"Cache yönetimi"},dogru:"B",aciklama:"Multi NAT yüksek erişilebilirlik sağlar.",cikma_ihtimali:80},

  /* ════════════════ aws-10 ════════════════ */
  {id:"10-1",video:"aws-10",konu:"Caching",zorluk:"kolay",soru:"Caching'in temel amacı nedir?",secenekler:{A:"Veriyi silmek",B:"Veriyi sıkıştırmak",C:"Sık erişilen veriyi hızlı sunmak",D:"Veriyi şifrelemek"},dogru:"C",aciklama:"Caching, sık erişilen veriyi hızlı sunmak için kullanılır.",cikma_ihtimali:82},
  {id:"10-2",video:"aws-10",konu:"CloudFront",zorluk:"orta",soru:"CloudFront Edge Location'larının temel görevi nedir?",secenekler:{A:"Veriyi şifrelemek",B:"Veriyi en yakın noktadan sunmak",C:"Veritabanı oluşturmak",D:"Load balancing yapmak"},dogru:"B",aciklama:"Edge Location'lar içeriği kullanıcıya en yakın noktadan sunar.",cikma_ihtimali:85},
  {id:"10-3",video:"aws-10",konu:"ElastiCache",zorluk:"kolay",soru:"AWS ElastiCache hangi tür veri depolama modelini kullanır?",secenekler:{A:"Disk tabanlı",B:"In-memory",C:"Tape storage",D:"Object storage"},dogru:"B",aciklama:"ElastiCache in-memory veri depolama kullanır.",cikma_ihtimali:88},
  {id:"10-4",video:"aws-10",konu:"Caching",zorluk:"orta",soru:"Caching kullanılmadığında sistemde ne olur?",secenekler:{A:"CPU düşer",B:"Database yükü artar",C:"Network kapanır",D:"Veri kaybolur"},dogru:"B",aciklama:"Caching yoksa tüm sorgular database'e gider ve yük artar.",cikma_ihtimali:85},
  {id:"10-6",video:"aws-10",konu:"ElastiCache",zorluk:"orta",soru:"ElastiCache hangi problemi çözmek için kullanılır?",secenekler:{A:"Disk yetersizliği",B:"Network kesintisi",C:"Database performans yükü",D:"DNS çözümleme"},dogru:"C",aciklama:"ElastiCache database üzerindeki yükü azaltır.",cikma_ihtimali:88},
  {id:"10-7",video:"aws-10",konu:"Redis",zorluk:"kolay",soru:"Redis hangi veri yapısını desteklemez?",secenekler:{A:"String",B:"List",C:"Hash",D:"Relational Table"},dogru:"D",aciklama:"Redis relational tablo yapısı kullanmaz.",cikma_ihtimali:80},
  {id:"10-9",video:"aws-10",konu:"Redis",zorluk:"orta",soru:"Redis mi Memcached mi daha fazla veri yapısı desteği sunar?",secenekler:{A:"Memcached",B:"Redis",C:"DynamoDB",D:"S3"},dogru:"B",aciklama:"Redis çok daha zengin veri yapısı sunar.",cikma_ihtimali:88},
  {id:"10-10",video:"aws-10",konu:"High Availability",zorluk:"orta",soru:"High Availability için hangi yapı kullanılır?",secenekler:{A:"Single node",B:"Primary-Replica",C:"Local storage",D:"Cold backup"},dogru:"B",aciklama:"Primary-replica yapısı yüksek erişilebilirlik sağlar.",cikma_ihtimali:85},
  {id:"10-11",video:"aws-10",konu:"Scaling",zorluk:"orta",soru:"Sharding ne anlama gelir?",secenekler:{A:"Veriyi silmek",B:"Veriyi bölmek",C:"Veriyi sıkıştırmak",D:"Veriyi şifrelemek"},dogru:"B",aciklama:"Sharding veriyi parçalara bölmektir.",cikma_ihtimali:80},
  {id:"10-13",video:"aws-10",konu:"Security",zorluk:"orta",soru:"In-transit encryption neyi ifade eder?",secenekler:{A:"Disk şifreleme",B:"Veri transferinde şifreleme",C:"Backup şifreleme",D:"CPU şifreleme"},dogru:"B",aciklama:"Veri transferi sırasında şifreleme yapılır.",cikma_ihtimali:82},
  {id:"10-16",video:"aws-10",konu:"S3",zorluk:"orta",soru:"Uzun süreli düşük erişimli veri için hangi S3 sınıfı kullanılır?",secenekler:{A:"Standard",B:"IA",C:"Deep Archive",D:"Glacier Instant"},dogru:"C",aciklama:"Deep Archive uzun süreli saklama içindir.",cikma_ihtimali:85},
  {id:"10-19",video:"aws-10",konu:"Redis",zorluk:"zor",soru:"Redis'te failover durumunda ne olur?",secenekler:{A:"Sistem kapanır",B:"Replica primary olur",C:"Veri silinir",D:"Network durur"},dogru:"B",aciklama:"Replica primary rolünü alır.",cikma_ihtimali:85},
  {id:"10-20",video:"aws-10",konu:"Architecture",zorluk:"orta",soru:"Active-passive mimaride pasif node ne zaman kullanılır?",secenekler:{A:"Her zaman",B:"Fail durumunda",C:"Backup için",D:"Scaling için"},dogru:"B",aciklama:"Pasif node fail durumunda devreye girer.",cikma_ihtimali:80},

  /* ════════════════ aws-11 ════════════════ */
  {id:"11-1",video:"aws-11",konu:"AI Services",zorluk:"kolay",soru:"AWS AI servislerinin en üst katmanındaki servislerin temel özelliği nedir?",secenekler:{A:"Yüksek donanım gerektirir",B:"ML bilgisi gerektirir",C:"Hazır ve kodsuz kullanılabilir",D:"Sadece GPU ile çalışır"},dogru:"C",aciklama:"AI Services katmanı hazır servisler sunar ve ML bilgisi gerektirmez.",cikma_ihtimali:82},
  {id:"11-2",video:"aws-11",konu:"SageMaker",zorluk:"kolay",soru:"SageMaker hangi amaçla kullanılır?",secenekler:{A:"Veri depolamak",B:"ML süreçlerini uçtan uca yönetmek",C:"Ağ yapılandırmak",D:"DNS çözümlemek"},dogru:"B",aciklama:"SageMaker veri hazırlama, eğitim ve deploy işlemlerini yönetir.",cikma_ihtimali:85},
  {id:"11-6",video:"aws-11",konu:"Rekognition",zorluk:"kolay",soru:"Amazon Rekognition hangi tür veriler üzerinde çalışabilir?",secenekler:{A:"Sadece metin",B:"Sadece ses",C:"Görüntü ve video",D:"Sadece tablo"},dogru:"C",aciklama:"Rekognition görüntü ve video analizi yapar.",cikma_ihtimali:88},
  {id:"11-7",video:"aws-11",konu:"Rekognition",zorluk:"orta",soru:"Rekognition'ın verdiği sonuçlarda kullanılan güven ölçütü nedir?",secenekler:{A:"Latency",B:"Confidence Score",C:"Throughput",D:"Bandwidth"},dogru:"B",aciklama:"Confidence Score doğruluk yüzdesini belirtir.",cikma_ihtimali:80},
  {id:"11-9",video:"aws-11",konu:"Rekognition",zorluk:"orta",soru:"PPE Detection hangi kullanım senaryosuna uygundur?",secenekler:{A:"E-ticaret önerileri",B:"İş güvenliği kontrolü",C:"DNS çözümleme",D:"Log analizi"},dogru:"B",aciklama:"PPE Detection iş güvenliği ekipmanlarını tespit eder.",cikma_ihtimali:82},
  {id:"11-16",video:"aws-11",konu:"Comprehend",zorluk:"kolay",soru:"Amazon Comprehend hangi alanla ilgilidir?",secenekler:{A:"Görüntü işleme",B:"Doğal dil işleme",C:"Ses üretimi",D:"Depolama"},dogru:"B",aciklama:"Comprehend NLP servisidir.",cikma_ihtimali:85},
  {id:"11-17",video:"aws-11",konu:"Comprehend",zorluk:"orta",soru:"Comprehend hangi tür analizleri yapabilir?",secenekler:{A:"CPU analizi",B:"Duygu analizi",C:"Disk analizi",D:"Network analizi"},dogru:"B",aciklama:"Metin üzerinden duygu analizi yapar.",cikma_ihtimali:82},
  {id:"11-18",video:"aws-11",konu:"Textract",zorluk:"kolay",soru:"Textract hangi teknolojiyi kullanır?",secenekler:{A:"OCR",B:"DNS",C:"CDN",D:"VPN"},dogru:"A",aciklama:"Textract OCR tabanlıdır.",cikma_ihtimali:85},
  {id:"11-19",video:"aws-11",konu:"Textract",zorluk:"orta",soru:"Textract hangi veri türlerini çıkarabilir?",secenekler:{A:"Sadece metin",B:"Metin ve yapılandırılmış veri",C:"Sadece ses",D:"Sadece video"},dogru:"B",aciklama:"Form ve tabloları analiz edebilir.",cikma_ihtimali:82},
  {id:"11-21",video:"aws-11",konu:"Polly",zorluk:"kolay",soru:"Amazon Polly ne yapar?",secenekler:{A:"Metni sese çevirir",B:"Sesi metne çevirir",C:"Veri saklar",D:"API oluşturur"},dogru:"A",aciklama:"Polly TTS (Text-to-Speech) servisidir.",cikma_ihtimali:88},
  {id:"11-22",video:"aws-11",konu:"Transcribe",zorluk:"kolay",soru:"Amazon Transcribe ne yapar?",secenekler:{A:"Metni sese çevirir",B:"Sesi metne çevirir",C:"Veri depolar",D:"Model eğitir"},dogru:"B",aciklama:"Transcribe STT (Speech-to-Text) servisidir.",cikma_ihtimali:88},
  {id:"11-24",video:"aws-11",konu:"Transcribe",zorluk:"orta",soru:"Transcribe hangi tür veriyi işleyebilir?",secenekler:{A:"Sadece metin",B:"Sadece video",C:"Ses (canlı veya kayıt)",D:"Sadece tablo"},dogru:"C",aciklama:"Canlı veya kayıtlı ses işleyebilir.",cikma_ihtimali:80},
  {id:"11-27",video:"aws-11",konu:"Personalize",zorluk:"kolay",soru:"Amazon Personalize ne sağlar?",secenekler:{A:"Veri depolama",B:"Kişiselleştirilmiş öneri",C:"Ağ yönetimi",D:"Ses analizi"},dogru:"B",aciklama:"Kullanıcıya özel öneriler sunar.",cikma_ihtimali:80},
  {id:"11-40",video:"aws-11",konu:"AI Services",zorluk:"kolay",soru:"AWS AI servislerinin ortak özelliği nedir?",secenekler:{A:"ML gerektirir",B:"Kod gerektirir",C:"Yönetilen servislerdir",D:"Donanım gerekir"},dogru:"C",aciklama:"Tamamen AWS tarafından yönetilir.",cikma_ihtimali:78},

  /* ════════════════ aws-12 ════════════════ */
  {id:"12-1",video:"aws-12",konu:"Monolitik Mimari",zorluk:"kolay",soru:"Monolitik mimarinin temel özelliği nedir?",secenekler:{A:"Servislerin ayrı uygulamalar halinde çalışması",B:"Yazılımın tek bir uygulama olarak çalışması",C:"Sadece container kullanması",D:"Sadece serverless olması"},dogru:"B",aciklama:"Monolitik yapıda tüm bileşenler tek uygulama içinde bulunur.",cikma_ihtimali:82},
  {id:"12-2",video:"aws-12",konu:"Mikroservis",zorluk:"kolay",soru:"Mikroservis mimarisinde servisler nasıl yapılandırılır?",secenekler:{A:"Tek script içinde",B:"Tek veritabanında",C:"Bağımsız küçük servisler halinde",D:"Sadece sanal makinelerde"},dogru:"C",aciklama:"Mikroservis mimarisi bağımsız servislerden oluşur.",cikma_ihtimali:88},
  {id:"12-3",video:"aws-12",konu:"Mikroservis",zorluk:"orta",soru:"Sipariş servisi güncelleneceğinde mikroservis mimarisinin avantajı nedir?",secenekler:{A:"Tüm sistemi yeniden dağıtmak gerekir",B:"Veritabanını silmek gerekir",C:"Sadece ilgili servis güncellenebilir",D:"Yeni region açmak gerekir"},dogru:"C",aciklama:"Mikroservislerde yalnızca ilgili servis güncellenebilir.",cikma_ihtimali:85},
  {id:"12-5",video:"aws-12",konu:"SQS",zorluk:"kolay",soru:"AWS SQS servisinin temel amacı nedir?",secenekler:{A:"DNS yönetimi",B:"Kuyruklama ve sıralama",C:"Nesne depolama",D:"Video işleme"},dogru:"B",aciklama:"SQS mesajları kuyrukta tutar ve işler.",cikma_ihtimali:88},
  {id:"12-6",video:"aws-12",konu:"SQS",zorluk:"kolay",soru:"SQS ile ilişkilendirilen yaklaşım hangisidir?",secenekler:{A:"Last In First Out",B:"Random Access",C:"First In First Out",D:"Round Robin"},dogru:"C",aciklama:"Derste FIFO mantığı özellikle vurgulanmıştır.",cikma_ihtimali:85},
  {id:"12-7",video:"aws-12",konu:"SNS",zorluk:"kolay",soru:"SNS servisinin temel kullanım amacı nedir?",secenekler:{A:"Bildirim yayınlamak",B:"Veritabanı oluşturmak",C:"Container çalıştırmak",D:"Subnet oluşturmak"},dogru:"A",aciklama:"SNS bildirim ve mesaj yayını için kullanılır.",cikma_ihtimali:85},
  {id:"12-8",video:"aws-12",konu:"SNS",zorluk:"orta",soru:"SNS ile SQS arasındaki temel fark nedir?",secenekler:{A:"SNS çoklu abonelere yayın yapabilir",B:"SNS sadece veritabanı içindir",C:"SQS yayın servisidir",D:"İkisi aynı servistir"},dogru:"A",aciklama:"SNS bir mesajı birçok aboneye iletebilir.",cikma_ihtimali:90},
  {id:"12-11",video:"aws-12",konu:"Step Functions",zorluk:"orta",soru:"Paralel iş akışlarının orkestrasyonu için hangi servis kullanılır?",secenekler:{A:"SQS",B:"Step Functions",C:"CloudWatch",D:"ECR"},dogru:"B",aciklama:"Step Functions karmaşık ve paralel süreçleri yönetir.",cikma_ihtimali:85},
  {id:"12-12",video:"aws-12",konu:"Lambda",zorluk:"kolay",soru:"Lambda'nın temel rolü nedir?",secenekler:{A:"Olaylara tepki veren kod çalıştırmak",B:"Fiziksel sunucu kurmak",C:"DNS çözmek",D:"Container registry sağlamak"},dogru:"A",aciklama:"Lambda olay tetiklemeli sunucusuz çalışır.",cikma_ihtimali:88},
  {id:"12-17",video:"aws-12",konu:"Serverless",zorluk:"kolay",soru:"Serverless yaklaşımının temel özelliği nedir?",secenekler:{A:"Sunucuların fiziksel olması",B:"Sunucu yönetiminin kullanıcıda olması",C:"Altyapı yönetiminin sağlayıcı tarafından yapılması",D:"Sadece EC2 kullanılması"},dogru:"C",aciklama:"Serverless'ta altyapı yönetimi bulut sağlayıcıdadır.",cikma_ihtimali:85},
  {id:"12-20",video:"aws-12",konu:"EventBridge",zorluk:"zor",soru:"Sipariş, fatura ve tahmin servisleri arasında olay bazlı akış kurmak için hangi servis kullanılabilir?",secenekler:{A:"EventBridge",B:"IAM",C:"ECR",D:"KMS"},dogru:"A",aciklama:"EventBridge olay odaklı entegrasyon sağlar.",cikma_ihtimali:88},
  {id:"12-23",video:"aws-12",konu:"Step Functions",zorluk:"zor",soru:"Bir iş akışında aynı anda iki paralel süreç başlatılacaksa hangi servis daha uygundur?",secenekler:{A:"Step Functions",B:"Route53",C:"CloudFront",D:"S3"},dogru:"A",aciklama:"Paralel orkestrasyon için kullanılır.",cikma_ihtimali:88},
  {id:"12-25",video:"aws-12",konu:"Docker",zorluk:"kolay",soru:"Docker temel olarak ne ile çalışır?",secenekler:{A:"Image dosyaları",B:"Fiziksel diskler",C:"Tape cihazları",D:"DNS kayıtları"},dogru:"A",aciklama:"Docker image tabanlıdır.",cikma_ihtimali:85},
  {id:"12-26",video:"aws-12",konu:"CI/CD",zorluk:"orta",soru:"CI/CD ifadesindeki CI neyi temsil eder?",secenekler:{A:"Continuous Integration",B:"Container Instance",C:"Cloud Interface",D:"Code Injection"},dogru:"A",aciklama:"CI sürekli entegrasyon anlamına gelir.",cikma_ihtimali:88},
  {id:"12-27",video:"aws-12",konu:"CI/CD",zorluk:"orta",soru:"CI/CD ifadesindeki CD neyi temsil eder?",secenekler:{A:"Cloud Deployment",B:"Continuous Delivery",C:"Container Definition",D:"Code Debug"},dogru:"B",aciklama:"CD sürekli dağıtım/teslim anlamındadır.",cikma_ihtimali:88},
  {id:"12-29",video:"aws-12",konu:"ECR",zorluk:"kolay",soru:"Docker image dosyalarının saklandığı AWS servisi hangisidir?",secenekler:{A:"ECR",B:"SQS",C:"Lambda",D:"ELB"},dogru:"A",aciklama:"ECR container image deposudur.",cikma_ihtimali:85},
  {id:"12-30",video:"aws-12",konu:"ECS",zorluk:"kolay",soru:"Elastic Container Service kısaltması hangisidir?",secenekler:{A:"ECR",B:"ECS",C:"EKS",D:"ECM"},dogru:"B",aciklama:"ECS container çalıştırma servisidir.",cikma_ihtimali:88},
  {id:"12-31",video:"aws-12",konu:"EKS",zorluk:"kolay",soru:"Elastic Kubernetes Service kısaltması hangisidir?",secenekler:{A:"ECS",B:"ECR",C:"EKS",D:"EKM"},dogru:"C",aciklama:"EKS yönetilen Kubernetes hizmetidir.",cikma_ihtimali:88},
  {id:"12-34",video:"aws-12",konu:"Fargate",zorluk:"orta",soru:"Container mimarisinde ölçeklenmeyi yönetmek için kullanılan serverless servis hangisidir?",secenekler:{A:"Fargate",B:"CloudTrail",C:"Inspector",D:"SES"},dogru:"A",aciklama:"Fargate container çalışma altyapısını yönetir.",cikma_ihtimali:88},
  {id:"12-36",video:"aws-12",konu:"Docker",zorluk:"kolay",soru:"Dockerfile ne için kullanılır?",secenekler:{A:"Container imajını tanımlamak için",B:"DNS kaydı oluşturmak için",C:"Veritabanı kurmak için",D:"IAM politikası yazmak için"},dogru:"A",aciklama:"Dockerfile image oluşturma talimatlarını içerir.",cikma_ihtimali:82},
  {id:"12-38",video:"aws-12",konu:"Kubernetes",zorluk:"kolay",soru:"Kubernetes'te küçük container birimleri ne olarak adlandırılır?",secenekler:{A:"Topic",B:"Shard",C:"Pod",D:"Queue"},dogru:"C",aciklama:"Pod en küçük dağıtım birimidir.",cikma_ihtimali:85},
  {id:"12-42",video:"aws-12",konu:"Load Balancer",zorluk:"orta",soru:"Application Load Balancer hangi katmanda çalışır?",secenekler:{A:"Layer 2",B:"Layer 3",C:"Layer 4",D:"Layer 7"},dogru:"D",aciklama:"ALB uygulama katmanında çalışır.",cikma_ihtimali:90},
  {id:"12-44",video:"aws-12",konu:"Load Balancer",zorluk:"orta",soru:"Network Load Balancer hangi katmanda çalışır?",secenekler:{A:"Layer 7",B:"Layer 6",C:"Layer 4",D:"Layer 1"},dogru:"C",aciklama:"NLB taşıma katmanında çalışır.",cikma_ihtimali:88},
  {id:"12-46",video:"aws-12",konu:"Scalability",zorluk:"orta",soru:"Tercih edilen büyüme yaklaşımı hangisidir?",secenekler:{A:"Vertical Scaling",B:"Horizontal Scaling",C:"Manual Scaling",D:"Cold Scaling"},dogru:"B",aciklama:"Yatay ölçekleme tercih edildiği belirtilmiştir.",cikma_ihtimali:85},
  {id:"12-48",video:"aws-12",konu:"AWS Sorumluluk Modeli",zorluk:"orta",soru:"Kullanıcı yetkileri ve şifrelerin sorumluluğu kime aittir?",secenekler:{A:"AWS'ye",B:"İnternet Servis Sağlayıcısına",C:"Müşteriye",D:"Load Balancer'a"},dogru:"C",aciklama:"Kimlik ve erişim bilgileri müşteri sorumluluğundadır.",cikma_ihtimali:88},
  {id:"12-49",video:"aws-12",konu:"AWS Sorumluluk Modeli",zorluk:"orta",soru:"Verinin güvenliğinden kim sorumludur?",secenekler:{A:"Müşteri",B:"ECR",C:"ALB",D:"SNS"},dogru:"A",aciklama:"Veri sahibi güvenlikten sorumludur.",cikma_ihtimali:88},
  {id:"12-50",video:"aws-12",konu:"AWS Sorumluluk Modeli",zorluk:"orta",soru:"Tam yönetilen servislerde altyapı ve servis yönetimi kimin sorumluluğundadır?",secenekler:{A:"Müşteri",B:"AWS",C:"Son kullanıcı",D:"Kubernetes"},dogru:"B",aciklama:"Yönetilen servis altyapısını AWS işletir.",cikma_ihtimali:88},

  /* ════════════════ aws-8 ════════════════ */
  {id:"8-1",video:"aws-8",konu:"Scalability",zorluk:"kolay",soru:"Scalability kavramı en doğru şekilde neyi ifade eder?",secenekler:{A:"Şifreleme",B:"Ölçeklendirilebilirlik",C:"Yedekleme",D:"Loglama"},dogru:"B",aciklama:"Scalability sistemin artan yük altında büyüyebilmesini ifade eder.",cikma_ihtimali:80},
  {id:"8-2",video:"aws-8",konu:"High Availability",zorluk:"kolay",soru:"High Availability kavramı aşağıdakilerden hangisiyle ilgilidir?",secenekler:{A:"Yüksek erişilebilirlik",B:"Veri sıkıştırma",C:"Log analizi",D:"Versiyonlama"},dogru:"A",aciklama:"High Availability sistemin kesintisiz hizmet verebilmesini hedefler.",cikma_ihtimali:85},
  {id:"8-3",video:"aws-8",konu:"Load Balancer",zorluk:"orta",soru:"Ölçeklendirme mimarisinde temel bileşenlerden biri hangisidir?",secenekler:{A:"Route 53",B:"CloudTrail",C:"Load Balancer",D:"Glue"},dogru:"C",aciklama:"Yük dağıtımı ve ölçeklendirme için Load Balancer kullanılır.",cikma_ihtimali:88},
  {id:"8-4",video:"aws-8",konu:"Load Balancer",zorluk:"orta",soru:"Load Balancer trafiği bir sunucuya göndermeden önce ne yapar?",secenekler:{A:"Snapshot alır",B:"Health check yapar",C:"DNS kaydı siler",D:"Veritabanı oluşturur"},dogru:"B",aciklama:"Sağlık kontrolü başarılı olursa trafik yönlendirilir.",cikma_ihtimali:88},
  {id:"8-5",video:"aws-8",konu:"Health Check",zorluk:"orta",soru:"Bir EC2 health check'e yanıt vermezse Load Balancer ne yapar?",secenekler:{A:"Tüm trafiği gönderir",B:"Sunucuyu siler",C:"Trafik yönlendirmez",D:"Subnet değiştirir"},dogru:"C",aciklama:"Sağlıksız hedeflere trafik gönderilmez.",cikma_ihtimali:85},
  {id:"8-7",video:"aws-8",konu:"High Availability",zorluk:"orta",soru:"High Availability artırmak için hangi yaklaşım kullanılmıştır?",secenekler:{A:"Tek AZ",B:"Çift AZ",C:"Tek subnet",D:"Tek NAT"},dogru:"B",aciklama:"Birden fazla AZ kullanımı erişilebilirliği artırır.",cikma_ihtimali:88},
  {id:"8-8",video:"aws-8",konu:"RDS",zorluk:"orta",soru:"Master veritabanı erişilemez hale gelirse hangi bileşen devreye girer?",secenekler:{A:"CloudFront",B:"Read Replica",C:"ECR",D:"CodeBuild"},dogru:"B",aciklama:"Read Replica master rolünü devralabilir.",cikma_ihtimali:85},
  {id:"8-10",video:"aws-8",konu:"NAT Gateway",zorluk:"zor",soru:"İki NAT Gateway kullanılmasının önemli nedenlerinden biri nedir?",secenekler:{A:"DNS hızlandırmak",B:"Yedeklilik sağlamak",C:"ECR oluşturmak",D:"IAM yönetmek"},dogru:"B",aciklama:"Çift NAT kesinti riskini azaltır.",cikma_ihtimali:85},
  {id:"8-11",video:"aws-8",konu:"CloudFront",zorluk:"orta",soru:"Google SEO puanını ve sayfa yükleme performansını artırmak için hangi servis vurgulanmıştır?",secenekler:{A:"CloudFront",B:"IAM",C:"SQS",D:"EBS"},dogru:"A",aciklama:"CDN ve cache mekanizması sayesinde içerik daha hızlı sunulur.",cikma_ihtimali:85},
  {id:"8-12",video:"aws-8",konu:"CDN",zorluk:"kolay",soru:"CloudFront'un temel görevi nedir?",secenekler:{A:"Veritabanı yönetmek",B:"İçeriği cache ederek dağıtmak",C:"Kullanıcı oluşturmak",D:"Kod derlemek"},dogru:"B",aciklama:"CloudFront bir CDN servisidir.",cikma_ihtimali:82},
  {id:"8-13",video:"aws-8",konu:"SSL/TLS",zorluk:"orta",soru:"SSL/TLS sertifikaları hangi bileşen üzerinde çalıştırılmıştır?",secenekler:{A:"NAT Gateway",B:"Application Load Balancer",C:"EBS",D:"Lambda"},dogru:"B",aciklama:"HTTPS trafiği için ALB üzerinde SSL/TLS kullanılır.",cikma_ihtimali:85},
  {id:"8-14",video:"aws-8",konu:"Application Load Balancer",zorluk:"kolay",soru:"Application Load Balancer OSI modelinin hangi katmanında çalışır?",secenekler:{A:"Layer 2",B:"Layer 3",C:"Layer 4",D:"Layer 7"},dogru:"D",aciklama:"ALB HTTP/HTTPS ile Layer 7'de çalışır.",cikma_ihtimali:90},
  {id:"8-15",video:"aws-8",konu:"Network Load Balancer",zorluk:"kolay",soru:"Network Load Balancer hangi katmanda çalışır?",secenekler:{A:"Layer 1",B:"Layer 4",C:"Layer 6",D:"Layer 7"},dogru:"B",aciklama:"TCP/UDP/TLS trafiğini Layer 4 seviyesinde yönetir.",cikma_ihtimali:88},
  {id:"8-16",video:"aws-8",konu:"Network Load Balancer",zorluk:"orta",soru:"Network Load Balancer için hangi protokol çifti özellikle belirtilmiştir?",secenekler:{A:"HTTP-HTTPS",B:"FTP-SFTP",C:"TCP-UDP",D:"SMTP-POP3"},dogru:"C",aciklama:"NLB TCP ve UDP trafiğiyle çalışır.",cikma_ihtimali:85},
  {id:"8-18",video:"aws-8",konu:"Microservices",zorluk:"kolay",soru:"Mikroservis mimarisinde uygulamalar nasıl tasarlanır?",secenekler:{A:"Tek büyük uygulama",B:"Birden çok bağımsız servis",C:"Sadece veritabanı",D:"Tek EC2"},dogru:"B",aciklama:"Fonksiyonlar küçük servisler halinde ayrılır.",cikma_ihtimali:85},
  {id:"8-20",video:"aws-8",konu:"Containers",zorluk:"orta",soru:"Konteyner mimarisi hangi servislerde çalıştırılabilir?",secenekler:{A:"ECS ve EKS",B:"CloudTrail ve IAM",C:"S3 ve Glacier",D:"Route 53 ve SES"},dogru:"A",aciklama:"Konteyner orkestrasyonu için ECS ve EKS kullanılır.",cikma_ihtimali:88},
  {id:"8-21",video:"aws-8",konu:"CI/CD",zorluk:"kolay",soru:"CI/CD kısaltması neyi ifade eder?",secenekler:{A:"Continuous Integration / Continuous Delivery",B:"Central Internet / Cloud Deployment",C:"Code Instance / Cloud Database",D:"Container Integration / Data Delivery"},dogru:"A",aciklama:"Sürekli entegrasyon ve teslim süreçlerini ifade eder.",cikma_ihtimali:88},
  {id:"8-22",video:"aws-8",konu:"CodeBuild",zorluk:"orta",soru:"CI/CD sürecinde CodeBuild'in görevi nedir?",secenekler:{A:"DNS yönetmek",B:"Yazılımı doğrulamak ve build etmek",C:"Veritabanı oluşturmak",D:"Kullanıcı açmak"},dogru:"B",aciklama:"Kodun uygunluğunu kontrol eder ve derleme yapar.",cikma_ihtimali:85},
  {id:"8-23",video:"aws-8",konu:"Docker",zorluk:"kolay",soru:"Docker temel olarak neyle çalışır?",secenekler:{A:"Snapshot",B:"İmajlar",C:"DNS kayıtları",D:"IAM politikaları"},dogru:"B",aciklama:"Docker uygulamaları container imajları halinde çalıştırır.",cikma_ihtimali:85},
  {id:"8-24",video:"aws-8",konu:"ECR",zorluk:"kolay",soru:"ECR açılımı nedir?",secenekler:{A:"Elastic Container Registry",B:"Elastic Cloud Router",C:"Enterprise Compute Resource",D:"Extended Cache Repository"},dogru:"A",aciklama:"AWS'in container imaj deposudur.",cikma_ihtimali:82},
  {id:"8-31",video:"aws-8",konu:"S3",zorluk:"orta",soru:"Uzun süre saklanacak dosyaların yaşam döngüsünü yönetmek için hangi özellik kullanılır?",secenekler:{A:"Lifecycle",B:"Autoscaling",C:"Peering",D:"Read Replica"},dogru:"A",aciklama:"Lifecycle ile nesneler farklı depolama sınıflarına taşınabilir.",cikma_ihtimali:82},
  {id:"8-32",video:"aws-8",konu:"S3 Lifecycle",zorluk:"orta",soru:"Aktif kullanılan verileri daha sonra düşük maliyetli depolamaya geçirmek için ne kullanılmalıdır?",secenekler:{A:"Lifecycle Policy",B:"Security Group",C:"Transit Gateway",D:"ALB"},dogru:"A",aciklama:"Lifecycle maliyet optimizasyonu sağlar.",cikma_ihtimali:85},
  {id:"8-35",video:"aws-8",konu:"Auto Scaling",zorluk:"orta",soru:"Trafik artışlarında yeni kaynakların otomatik eklenmesini sağlayan yaklaşım hangisidir?",secenekler:{A:"Auto Scaling",B:"Route Table",C:"Bucket Policy",D:"IAM User"},dogru:"A",aciklama:"Yük arttığında kapasite otomatik genişler.",cikma_ihtimali:90},
  {id:"8-36",video:"aws-8",konu:"Fargate",zorluk:"orta",soru:"Kubernetes veya container tabanlı yapılarda yönetim kolaylığı için hangi servis vurgulanmıştır?",secenekler:{A:"Fargate",B:"Athena",C:"SES",D:"SNS"},dogru:"A",aciklama:"Fargate container çalıştırmayı kolaylaştırır.",cikma_ihtimali:85},
  {id:"8-37",video:"aws-8",konu:"Caching",zorluk:"orta",soru:"Veritabanı üzerindeki yükü azaltmak için hangi yaklaşım kullanılır?",secenekler:{A:"Caching",B:"Formatlama",C:"Defragmentasyon",D:"Şifre kırma"},dogru:"A",aciklama:"Cache sık erişilen verileri hızlı sunar.",cikma_ihtimali:82},
  {id:"8-38",video:"aws-8",konu:"Scalability",zorluk:"zor",soru:"Kampanya dönemlerinde kullanıcı sayısı aniden artan bir e-ticaret sitesi için hangi özellik kritik önemdedir?",secenekler:{A:"Scalability",B:"Tek sunucu kullanımı",C:"Statik IP",D:"Manuel DNS"},dogru:"A",aciklama:"Artan yükü karşılayabilmek için ölçeklenebilirlik gerekir.",cikma_ihtimali:88},
  {id:"8-39",video:"aws-8",konu:"High Availability",zorluk:"zor",soru:"Bir AZ arızalandığında hizmetin devam etmesini sağlayan mimari yaklaşım hangisidir?",secenekler:{A:"Tek EC2",B:"Çoklu AZ dağıtımı",C:"Tek subnet",D:"Tek NAT"},dogru:"B",aciklama:"Çoklu AZ yapısı arıza toleransı sağlar.",cikma_ihtimali:90},
  {id:"8-40",video:"aws-8",konu:"CloudFront",zorluk:"orta",soru:"Statik içeriklerin kullanıcıya daha yakın noktalardan sunulması hangi servisle sağlanır?",secenekler:{A:"CloudFront",B:"IAM",C:"CodeBuild",D:"ECR"},dogru:"A",aciklama:"CloudFront CDN olarak içerikleri cache edip dağıtır.",cikma_ihtimali:85},

  /* ════════════════ aws-7 ════════════════ */
  {id:"7-1",video:"aws-7",konu:"DNS",zorluk:"kolay",soru:"AWS üzerinde DNS hizmeti sunan servis hangisidir?",secenekler:{A:"CloudFront",B:"Route 53",C:"S3",D:"RDS"},dogru:"B",aciklama:"Route 53 AWS'in DNS servisidir.",cikma_ihtimali:85},
  {id:"7-2",video:"aws-7",konu:"DNS",zorluk:"kolay",soru:"Route 53 servisinin adı hangi porttan gelmektedir?",secenekler:{A:"22",B:"80",C:"53",D:"443"},dogru:"C",aciklama:"DNS geleneksel olarak 53. portu kullanır.",cikma_ihtimali:80},
  {id:"7-3",video:"aws-7",konu:"CDN",zorluk:"kolay",soru:"AWS'in CDN servisi hangisidir?",secenekler:{A:"CloudFront",B:"CloudWatch",C:"CloudTrail",D:"Direct Connect"},dogru:"A",aciklama:"CloudFront içerikleri uç noktalara dağıtan CDN servisidir.",cikma_ihtimali:85},
  {id:"7-4",video:"aws-7",konu:"S3",zorluk:"kolay",soru:"AWS üzerinde Object Storage hizmeti hangi servisle sağlanır?",secenekler:{A:"EBS",B:"EFS",C:"S3",D:"RDS"},dogru:"C",aciklama:"S3 AWS'in nesne tabanlı depolama servisidir.",cikma_ihtimali:85},
  {id:"7-5",video:"aws-7",konu:"RDS",zorluk:"kolay",soru:"İlişkisel veritabanı hizmetleri için kullanılan AWS servisi hangisidir?",secenekler:{A:"RDS",B:"S3",C:"IAM",D:"CloudFront"},dogru:"A",aciklama:"RDS yönetilen ilişkisel veritabanı hizmetidir.",cikma_ihtimali:85},
  {id:"7-7",video:"aws-7",konu:"Edge Location",zorluk:"orta",soru:"Edge Location'ların temel amacı nedir?",secenekler:{A:"Veritabanı çalıştırmak",B:"İçerikleri önbelleğe alarak gecikmeyi azaltmak",C:"IAM yönetmek",D:"EC2 başlatmak"},dogru:"B",aciklama:"Edge Location'lar içerikleri kullanıcıya daha yakın noktalarda cache'ler.",cikma_ihtimali:85},
  {id:"7-13",video:"aws-7",konu:"WAF",zorluk:"orta",soru:"Farklı ülkelerden gelen web saldırılarına karşı hangi servis kullanılabilir?",secenekler:{A:"WAF",B:"Route 53",C:"EBS",D:"ECR"},dogru:"A",aciklama:"WAF web uygulamalarını saldırılara karşı korumak için kullanılır.",cikma_ihtimali:88},
  {id:"7-14",video:"aws-7",konu:"Auto Scaling",zorluk:"orta",soru:"Trafik 100'den 10.000 kullanıcıya çıktığında hangi AWS özelliği yeni EC2'ler başlatabilir?",secenekler:{A:"IAM",B:"Auto Scaling",C:"S3 Lifecycle",D:"Transit Gateway"},dogru:"B",aciklama:"Auto Scaling yük arttığında kapasiteyi artırır.",cikma_ihtimali:90},
  {id:"7-15",video:"aws-7",konu:"Load Balancer",zorluk:"orta",soru:"Auto Scaling ile birlikte çalışan ve trafiği sunucular arasında dağıtan servis hangisidir?",secenekler:{A:"CloudTrail",B:"SNS",C:"Load Balancer",D:"ECR"},dogru:"C",aciklama:"Load Balancer gelen trafiği uygun sunuculara yönlendirir.",cikma_ihtimali:88},
  {id:"7-16",video:"aws-7",konu:"Load Balancer",zorluk:"orta",soru:"Web trafiği için oluşturulan yük dengeleyici türü hangisidir?",secenekler:{A:"Network Load Balancer",B:"Gateway Load Balancer",C:"Classic Load Balancer",D:"Application Load Balancer"},dogru:"D",aciklama:"HTTP tabanlı uygulamalar için ALB kullanılmıştır.",cikma_ihtimali:88},
  {id:"7-17",video:"aws-7",konu:"Load Balancer",zorluk:"kolay",soru:"Application Load Balancer oluşturulurken hedeflerin tanımlandığı yapı nedir?",secenekler:{A:"Bucket",B:"Target Group",C:"Policy",D:"Role"},dogru:"B",aciklama:"ALB hedeflerini Target Group üzerinden belirler.",cikma_ihtimali:85},
  {id:"7-18",video:"aws-7",konu:"HTTPS",zorluk:"orta",soru:"Application Load Balancer üzerinde HTTPS kullanmak için ek olarak ne gerekir?",secenekler:{A:"CIDR",B:"VPN",C:"SSL/TLS sertifikası",D:"NAT Gateway"},dogru:"C",aciklama:"HTTPS için sertifika gereklidir.",cikma_ihtimali:85},
  {id:"7-19",video:"aws-7",konu:"IAM",zorluk:"kolay",soru:"AWS üzerinde kullanıcı yetkilendirmesi için kullanılan temel servis hangisidir?",secenekler:{A:"IAM",B:"RDS",C:"SQS",D:"VPC"},dogru:"A",aciklama:"IAM kimlik ve erişim yönetiminden sorumludur.",cikma_ihtimali:92},
  {id:"7-20",video:"aws-7",konu:"IAM",zorluk:"orta",soru:"Bir kullanıcıya belirli izinler vermek için en sık kullanılan IAM bileşeni hangisidir?",secenekler:{A:"Bucket",B:"Policy",C:"AMI",D:"Snapshot"},dogru:"B",aciklama:"Policy'ler izinleri tanımlar.",cikma_ihtimali:88},
  {id:"7-21",video:"aws-7",konu:"IAM",zorluk:"orta",soru:"EC2 gibi servislerin başka AWS servislerine erişmesi için genellikle ne kullanılır?",secenekler:{A:"Role",B:"CloudFront",C:"Subnet",D:"Route"},dogru:"A",aciklama:"Role'ler servisler arası yetkilendirme sağlar.",cikma_ihtimali:90},
  {id:"7-22",video:"aws-7",konu:"MFA",zorluk:"kolay",soru:"IAM kullanıcı güvenliğini artırmak için hangi yöntem önerilmiştir?",secenekler:{A:"NAT",B:"MFA",C:"Peering",D:"CloudFront"},dogru:"B",aciklama:"Çok faktörlü kimlik doğrulama ek güvenlik sağlar.",cikma_ihtimali:88},
  {id:"7-24",video:"aws-7",konu:"S3",zorluk:"orta",soru:"Bir S3 nesnesinin URL'sine erişimde Access Denied hatası alındığında hangi ayar gerekli olabilir?",secenekler:{A:"Bucket Policy",B:"Subnet",C:"NAT Gateway",D:"Auto Scaling"},dogru:"A",aciklama:"Erişim için uygun bucket policy tanımlanmalıdır.",cikma_ihtimali:82},
  {id:"7-25",video:"aws-7",konu:"S3",zorluk:"orta",soru:"S3 üzerinde nesnelerin yaşam döngüsünü yönetmek için hangi özellik kullanılır?",secenekler:{A:"Lifecycle",B:"CloudTrail",C:"Route Table",D:"Elastic IP"},dogru:"A",aciklama:"Lifecycle kuralları nesne yönetimini otomatikleştirir.",cikma_ihtimali:82},
  {id:"7-30",video:"aws-7",konu:"Elastic IP",zorluk:"orta",soru:"VPN sunucusunun IP adresinin değişmemesi için hangi özellik kullanılmıştır?",secenekler:{A:"CloudFront",B:"Elastic IP",C:"EFS",D:"Snapshot"},dogru:"B",aciklama:"Elastic IP sabit genel IP sağlar.",cikma_ihtimali:82},
  {id:"7-33",video:"aws-7",konu:"NAT Gateway",zorluk:"orta",soru:"Private subnetlerdeki sunucuların internete çıkışı için hangi servis kullanılır?",secenekler:{A:"Internet Gateway",B:"Transit Gateway",C:"NAT Gateway",D:"Route 53"},dogru:"C",aciklama:"Private kaynaklar çıkış için NAT Gateway kullanır.",cikma_ihtimali:88},
  {id:"7-34",video:"aws-7",konu:"Internet Gateway",zorluk:"kolay",soru:"Public subnetlerin internete erişebilmesi için hangi servis gereklidir?",secenekler:{A:"Internet Gateway",B:"SQS",C:"ECR",D:"IAM"},dogru:"A",aciklama:"Internet Gateway public erişim sağlar.",cikma_ihtimali:88},
  {id:"7-35",video:"aws-7",konu:"VPC",zorluk:"orta",soru:"Route table üzerinde 0.0.0.0/0 rotası neyi ifade eder?",secenekler:{A:"Tek bir IP",B:"VPC CIDR bloğu",C:"Tüm trafik",D:"Sadece DNS trafiği"},dogru:"C",aciklama:"0.0.0.0/0 tüm adreslere yönelik trafiği temsil eder.",cikma_ihtimali:85},
  {id:"7-36",video:"aws-7",konu:"Bastion Host",zorluk:"orta",soru:"Bastion Host'un temel amacı nedir?",secenekler:{A:"Veritabanı depolamak",B:"İç sistemlere kontrollü geçiş noktası olmak",C:"CDN hizmeti sunmak",D:"DNS çözümlemek"},dogru:"B",aciklama:"Bastion Host yönetim erişimi için sıçrama noktasıdır.",cikma_ihtimali:85},
  {id:"7-39",video:"aws-7",konu:"Aurora",zorluk:"kolay",soru:"Aurora'nın hangi veritabanlarıyla uyumlu olduğu belirtilmiştir?",secenekler:{A:"MariaDB ve Oracle",B:"MongoDB ve Redis",C:"PostgreSQL ve MySQL",D:"SQL Server ve Oracle"},dogru:"C",aciklama:"Aurora'nın PostgreSQL ve MySQL uyumluluğu vurgulanmıştır.",cikma_ihtimali:88},
  {id:"7-40",video:"aws-7",konu:"S3",zorluk:"orta",soru:"Bir web sitesindeki statik içerikler için hangi servis önerilmiştir?",secenekler:{A:"EC2",B:"RDS",C:"S3",D:"IAM"},dogru:"C",aciklama:"Resim, video ve doküman gibi statik veriler S3'te tutulur.",cikma_ihtimali:82},
  {id:"7-43",video:"aws-7",konu:"Yüksek Erişilebilirlik",zorluk:"orta",soru:"Yük dengeleyici kurulurken birden fazla AZ seçilmesinin temel amacı nedir?",secenekler:{A:"Maliyeti artırmak",B:"Yüksek erişilebilirlik sağlamak",C:"IAM yönetmek",D:"DNS hızlandırmak"},dogru:"B",aciklama:"Birden fazla AZ kullanımı kesintilere karşı dayanıklılık sağlar.",cikma_ihtimali:88},
  {id:"7-44",video:"aws-7",konu:"CloudFront",zorluk:"orta",soru:"CloudFront kullanmanın temel faydası nedir?",secenekler:{A:"IAM yönetmek",B:"İçerikleri kullanıcılara daha hızlı ulaştırmak",C:"Veritabanı oluşturmak",D:"VPN kurmak"},dogru:"B",aciklama:"CDN yapısı gecikmeyi azaltır ve performansı artırır.",cikma_ihtimali:85},
  {id:"7-45",video:"aws-7",konu:"CIDR",zorluk:"orta",soru:"AWS mimari çiziminde CIDR bloklarının belirtilmesi neden önemlidir?",secenekler:{A:"Sadece görsel amaçlıdır",B:"Network tasarımını ve adreslemeyi gösterir",C:"Yalnızca maliyet hesabı içindir",D:"Sadece DNS için gereklidir"},dogru:"B",aciklama:"CIDR blokları ağ yapısının temel bileşenlerinden biridir.",cikma_ihtimali:82},

  /* ════════════════ aws-5-6 ════════════════ */
  {id:"56-1",video:"aws-5-6",konu:"Availability Zone",zorluk:"kolay",soru:"AWS Availability Zone'lar hakkında hangisi doğrudur?",secenekler:{A:"Aynı binada bulunurlar",B:"Birbirlerinden yaklaşık 100 km uzakta olabilirler",C:"Farklı regionlarda olmak zorundadırlar",D:"Sadece veritabanları için kullanılırlar"},dogru:"B",aciklama:"AZ'ler farklı yapılarda ve yaklaşık 100 km uzaklıkta olabilir.",cikma_ihtimali:85},
  {id:"56-2",video:"aws-5-6",konu:"VPC",zorluk:"orta",soru:"Bir VPC oluşturulduktan sonra CIDR bloğu için hangi kural geçerlidir?",secenekler:{A:"İstenildiği zaman değiştirilebilir",B:"Sadece gece değiştirilebilir",C:"Bir kez verildikten sonra değiştirilemez",D:"AWS otomatik değiştirir"},dogru:"C",aciklama:"VPC CIDR bloğu sonradan değiştirilemez.",cikma_ihtimali:88},
  {id:"56-3",video:"aws-5-6",konu:"VPC",zorluk:"kolay",soru:"AWS VPC için desteklenen CIDR aralığı hangisidir?",secenekler:{A:"Slash 8 ile Slash 12",B:"Slash 16 ile Slash 28",C:"Slash 24 ile Slash 32",D:"Slash 1 ile Slash 16"},dogru:"B",aciklama:"VPC /16 ile /28 aralığını destekler.",cikma_ihtimali:85},
  {id:"56-4",video:"aws-5-6",konu:"CIDR",zorluk:"kolay",soru:"CIDR notasyonunda /16 ifadesi neyi belirtir?",secenekler:{A:"İlk 16 bit ağ kısmıdır",B:"Son 16 bit ağ kısmıdır",C:"16 adet IP vardır",D:"16 subnet vardır"},dogru:"A",aciklama:"/16, ilk 16 bitin ağ kısmı olduğunu ifade eder.",cikma_ihtimali:85},
  {id:"56-5",video:"aws-5-6",konu:"CIDR",zorluk:"kolay",soru:"Bir /24 subnet teorik olarak kaç IP adresi içerir?",secenekler:{A:"128",B:"256",C:"512",D:"1024"},dogru:"B",aciklama:"2^8 = 256 IP adresi elde edilir.",cikma_ihtimali:88},
  {id:"56-6",video:"aws-5-6",konu:"CIDR",zorluk:"kolay",soru:"Bir /16 ağ teorik olarak kaç IP adresi sağlar?",secenekler:{A:"16384",B:"32768",C:"65536",D:"131072"},dogru:"C",aciklama:"2^16 = 65536 IP adresi sağlar.",cikma_ihtimali:85},
  {id:"56-7",video:"aws-5-6",konu:"AWS IP Adresleri",zorluk:"orta",soru:"AWS bir subnet içerisinde kaç IP adresini rezerve eder?",secenekler:{A:"2",B:"3",C:"4",D:"5"},dogru:"D",aciklama:"AWS her subnetten 5 IP adresi ayırır.",cikma_ihtimali:88},
  {id:"56-12",video:"aws-5-6",konu:"Network Tasarımı",zorluk:"zor",soru:"Birden fazla VPC arasında çakışan CIDR blokları kullanılması hangi soruna yol açabilir?",secenekler:{A:"Daha hızlı iletişim",B:"Overlap kaynaklı ağ problemleri",C:"Otomatik şifreleme",D:"Maliyet düşüşü"},dogru:"B",aciklama:"Çakışan ağlar ileride haberleşme sorunları oluşturabilir.",cikma_ihtimali:85},
  {id:"56-13",video:"aws-5-6",konu:"Subnet",zorluk:"kolay",soru:"Subnetler hangi iki temel kategoriye ayrılmıştır?",secenekler:{A:"LAN ve WAN",B:"Static ve Dynamic",C:"Public ve Private",D:"IPv4 ve IPv6"},dogru:"C",aciklama:"Public ve Private subnet yapıları anlatıldı.",cikma_ihtimali:88},
  {id:"56-14",video:"aws-5-6",konu:"Route Table",zorluk:"kolay",soru:"AWS'te ağ trafiğini yönlendirmek için kullanılan yapı hangisidir?",secenekler:{A:"Security Group",B:"Route Table",C:"CloudWatch",D:"IAM"},dogru:"B",aciklama:"Trafik yönlendirme Route Table ile yapılır.",cikma_ihtimali:88},
  {id:"56-15",video:"aws-5-6",konu:"Internet Gateway",zorluk:"kolay",soru:"Internet Gateway'in temel görevi nedir?",secenekler:{A:"Sadece çıkış trafiği sağlamak",B:"Veritabanı replikasyonu yapmak",C:"Inbound ve outbound internet erişimi sağlamak",D:"DNS çözümlemek"},dogru:"C",aciklama:"Internet Gateway giriş ve çıkış internet trafiğini sağlar.",cikma_ihtimali:88},
  {id:"56-16",video:"aws-5-6",konu:"NAT Gateway",zorluk:"kolay",soru:"NAT Gateway hangi trafik türü için kullanılır?",secenekler:{A:"Sadece inbound",B:"Sadece outbound",C:"DNS trafiği",D:"Yalnız HTTPS"},dogru:"B",aciklama:"NAT Gateway yalnızca çıkış yönlü trafik için kullanılır.",cikma_ihtimali:90},
  {id:"56-18",video:"aws-5-6",konu:"NAT Gateway",zorluk:"orta",soru:"NAT Gateway'in çalışabilmesi için hangi kaynak gereklidir?",secenekler:{A:"IAM Role",B:"Elastic IP",C:"CloudFront",D:"Lambda"},dogru:"B",aciklama:"NAT Gateway dış erişim için Elastic IP kullanır.",cikma_ihtimali:85},
  {id:"56-19",video:"aws-5-6",konu:"NACL",zorluk:"orta",soru:"Network Access Control List (NACL) hangi seviyede çalışır?",secenekler:{A:"VPC seviyesinde",B:"EC2 işlemci seviyesinde",C:"Uygulama seviyesinde",D:"DNS seviyesinde"},dogru:"A",aciklama:"NACL kuralları VPC düzeyinde uygulanır.",cikma_ihtimali:82},
  {id:"56-20",video:"aws-5-6",konu:"Security Group",zorluk:"orta",soru:"Security Group'un NACL'e göre temel farkı nedir?",secenekler:{A:"Daha mikro seviyede kontrol sağlaması",B:"DNS sunucusu olması",C:"Load Balancer olması",D:"Route Table olması"},dogru:"A",aciklama:"Security Group daha detaylı ve kaynak bazlı kurallar sunar.",cikma_ihtimali:88},
  {id:"56-22",video:"aws-5-6",konu:"Load Balancer",zorluk:"orta",soru:"Load Balancer'ın health check mekanizmasının amacı nedir?",secenekler:{A:"Maliyeti artırmak",B:"Sadece log toplamak",C:"Trafiği yalnızca sağlıklı hedeflere yönlendirmek",D:"Subnet oluşturmak"},dogru:"C",aciklama:"Sağlıksız sunuculara trafik gönderilmez.",cikma_ihtimali:88},
  {id:"56-23",video:"aws-5-6",konu:"Network Load Balancer",zorluk:"kolay",soru:"Network Load Balancer OSI modelinin hangi katmanında çalışır?",secenekler:{A:"Layer 2",B:"Layer 3",C:"Layer 4",D:"Layer 7"},dogru:"C",aciklama:"NLB Layer 4 seviyesinde çalışır.",cikma_ihtimali:88},
  {id:"56-24",video:"aws-5-6",konu:"Application Load Balancer",zorluk:"kolay",soru:"Application Load Balancer hangi katmanda çalışır?",secenekler:{A:"Layer 2",B:"Layer 4",C:"Layer 5",D:"Layer 7"},dogru:"D",aciklama:"ALB uygulama katmanı olan Layer 7'de çalışır.",cikma_ihtimali:90},
  {id:"56-28",video:"aws-5-6",konu:"VPC Endpoint",zorluk:"orta",soru:"VPC Endpoint'in temel amacı nedir?",secenekler:{A:"EC2 silmek",B:"Özel ağ üzerinden servislere erişmek",C:"Route Table oluşturmak",D:"CIDR hesaplamak"},dogru:"B",aciklama:"Private bağlantı ile servis erişimi sağlar.",cikma_ihtimali:85},
  {id:"56-30",video:"aws-5-6",konu:"VPC Peering",zorluk:"kolay",soru:"İki farklı VPC arasında doğrudan bağlantı kurmak için hangi yapı kullanılır?",secenekler:{A:"Lambda",B:"CloudFront",C:"VPC Peering",D:"SQS"},dogru:"C",aciklama:"VPC Peering iki VPC arasında özel bağlantı sağlar.",cikma_ihtimali:88},
  {id:"56-31",video:"aws-5-6",konu:"VPC Peering",zorluk:"zor",soru:"A-B ve B-C arasında peering varsa, A ile C'nin iletişim kurabilmesi için ne gerekir?",secenekler:{A:"Otomatik çalışır",B:"B üzerinden transit geçiş yeterlidir",C:"A ile C arasında ayrıca peering gerekir",D:"DNS kaydı gerekir"},dogru:"C",aciklama:"Peering transit routing desteklemez.",cikma_ihtimali:90},
  {id:"56-32",video:"aws-5-6",konu:"VPC Peering",zorluk:"zor",soru:"VPC Peering için hangi ifade doğrudur?",secenekler:{A:"Transit iletişim destekler",B:"Bir VPC diğerinin üzerinden üçüncüye erişebilir",C:"Transit iletişim desteklemez",D:"Sadece aynı subnet içinde çalışır"},dogru:"C",aciklama:"Peering bağlantıları transit değildir.",cikma_ihtimali:90},
  {id:"56-33",video:"aws-5-6",konu:"Transit Gateway",zorluk:"orta",soru:"Çok sayıda VPC'nin merkezi olarak bağlanması için hangi servis kullanılır?",secenekler:{A:"CloudWatch",B:"Transit Gateway",C:"Elastic IP",D:"S3"},dogru:"B",aciklama:"Transit Gateway çoklu VPC bağlantılarını sadeleştirir.",cikma_ihtimali:90},
  {id:"56-34",video:"aws-5-6",konu:"Transit Gateway",zorluk:"orta",soru:"Transit Gateway'in temel avantajı nedir?",secenekler:{A:"CIDR değiştirmek",B:"Peering karmaşıklığını azaltmak",C:"DNS hızlandırmak",D:"Veritabanı yönetmek"},dogru:"B",aciklama:"Merkezi bağlantı noktası sağlar.",cikma_ihtimali:88},
  {id:"56-37",video:"aws-5-6",konu:"Direct Connect",zorluk:"orta",soru:"AWS Direct Connect'in temel amacı nedir?",secenekler:{A:"Kablosuz erişim sağlamak",B:"Fiber bağlantı ile doğrudan bağlantı kurmak",C:"DNS çözümlemek",D:"Subnet oluşturmak"},dogru:"B",aciklama:"Özel fiziksel bağlantı sunar.",cikma_ihtimali:85},
  {id:"56-43",video:"aws-5-6",konu:"Route Table",zorluk:"zor",soru:"Public subnetlerin internet erişimi için Route Table'da 0.0.0.0/0 rotası nereye yönlendirilmelidir?",secenekler:{A:"NAT Gateway",B:"Internet Gateway",C:"Security Group",D:"VPC Endpoint"},dogru:"B",aciklama:"Public subnetler internet çıkışını IGW üzerinden yapar.",cikma_ihtimali:90},
  {id:"56-44",video:"aws-5-6",konu:"Route Table",zorluk:"zor",soru:"Private subnetler için varsayılan rota genellikle nereye yönlendirilir?",secenekler:{A:"Internet Gateway",B:"CloudFront",C:"NAT Gateway",D:"Route53"},dogru:"C",aciklama:"Private subnetlerin çıkışı NAT Gateway üzerinden sağlanır.",cikma_ihtimali:90},
  {id:"56-57",video:"aws-5-6",konu:"NAT Gateway",zorluk:"zor",soru:"NAT Gateway'in public subnet içine yerleştirilmesinin nedeni nedir?",secenekler:{A:"Çünkü inbound trafik almalıdır",B:"Çünkü internete erişebilmelidir",C:"Çünkü veritabanıdır",D:"Çünkü DNS sunucusudur"},dogru:"B",aciklama:"NAT Gateway dış dünya ile iletişim kurabilmek için public subnette bulunur.",cikma_ihtimali:88},
  {id:"56-58",video:"aws-5-6",konu:"High Availability",zorluk:"zor",soru:"Kaynakların birden fazla Availability Zone'a dağıtılmasının temel amacı nedir?",secenekler:{A:"CIDR küçültmek",B:"Yüksek erişilebilirlik sağlamak",C:"DNS hızlandırmak",D:"Port sayısını artırmak"},dogru:"B",aciklama:"Farklı AZ kullanımı arıza durumlarında erişilebilirliği artırır.",cikma_ihtimali:90},
  {id:"56-60",video:"aws-5-6",konu:"AWS Networking",zorluk:"zor",soru:"Çok sayıda VPC ve peering yönetimi karmaşık hale geliyorsa en uygun çözüm nedir?",secenekler:{A:"Her VPC'yi silmek",B:"Sadece Route53 kullanmak",C:"Transit Gateway kullanmak",D:"Tüm subnetleri public yapmak"},dogru:"C",aciklama:"Transit Gateway merkezi bağlantı sağlayarak karmaşıklığı azaltır.",cikma_ihtimali:90},

  /* ════════════════ aws-4 ════════════════ */
  {id:"4-5",video:"aws-4",konu:"RDS",zorluk:"kolay",soru:"Amazon RDS açılımı nedir?",secenekler:{A:"Relational Database Service",B:"Regional Data Service",C:"Redundant Database System",D:"Remote Data Storage"},dogru:"A",aciklama:"RDS Relational Database Service anlamına gelir.",cikma_ihtimali:88},
  {id:"4-6",video:"aws-4",konu:"DynamoDB",zorluk:"kolay",soru:"Amazon DynamoDB hangi veri tabanı kategorisindedir?",secenekler:{A:"Relational",B:"Graph",C:"Non-Relational",D:"Time-Series"},dogru:"C",aciklama:"DynamoDB ilişkisel olmayan NoSQL veri tabanıdır.",cikma_ihtimali:90},
  {id:"4-7",video:"aws-4",konu:"Relational Database",zorluk:"orta",soru:"İlişkisel veri tabanlarının temel özelliği nedir?",secenekler:{A:"Verilerin tablo yapısında tutulması",B:"Sadece JSON kullanması",C:"Şemasız olması",D:"Anahtar-değer modeli kullanması"},dogru:"A",aciklama:"Relational veri tabanları tablo temelli çalışır.",cikma_ihtimali:85},
  {id:"4-8",video:"aws-4",konu:"NoSQL",zorluk:"orta",soru:"İlişkisel olmayan veri tabanlarında hangi yapı yaygın olarak kullanılır?",secenekler:{A:"Tablo-Satır",B:"Key-Value",C:"Worksheet",D:"Pivot"},dogru:"B",aciklama:"NoSQL sistemlerde key-value yaklaşımı yaygındır.",cikma_ihtimali:85},
  {id:"4-11",video:"aws-4",konu:"RDS",zorluk:"kolay",soru:"Aşağıdakilerden hangisi RDS üzerinde çalıştırılabilen veri tabanlarından biridir?",secenekler:{A:"Redis",B:"MySQL",C:"Memcached",D:"Neptune"},dogru:"B",aciklama:"MySQL RDS tarafından desteklenen veri tabanlarından biridir.",cikma_ihtimali:85},
  {id:"4-12",video:"aws-4",konu:"RDS",zorluk:"kolay",soru:"Aşağıdakilerden hangisi RDS tarafından desteklenir?",secenekler:{A:"Oracle",B:"Redis",C:"ElastiCache",D:"Neptune"},dogru:"A",aciklama:"Oracle RDS üzerinde çalışabilen ilişkisel veri tabanlarındandır.",cikma_ihtimali:85},
  {id:"4-13",video:"aws-4",konu:"RDS",zorluk:"kolay",soru:"Aşağıdakilerden hangisi RDS destekli ilişkisel veri tabanlarından biridir?",secenekler:{A:"MongoDB",B:"DynamoDB",C:"MariaDB",D:"DocumentDB"},dogru:"C",aciklama:"MariaDB RDS tarafından desteklenmektedir.",cikma_ihtimali:82},
  {id:"4-15",video:"aws-4",konu:"Timestream",zorluk:"orta",soru:"Zaman serisi verileri için önerilen AWS veri tabanı servisi hangisidir?",secenekler:{A:"Neptune",B:"Timestream",C:"Aurora",D:"QLDB"},dogru:"B",aciklama:"Amazon Timestream zaman serisi verileri için geliştirilmiştir.",cikma_ihtimali:75},
  {id:"4-16",video:"aws-4",konu:"Redshift",zorluk:"orta",soru:"Çok büyük hacimli veriler üzerinde veri ambarı senaryoları için hangi servis kullanılır?",secenekler:{A:"Redshift",B:"ElastiCache",C:"DynamoDB",D:"QLDB"},dogru:"A",aciklama:"Redshift veri ambarı çözümleri için kullanılır.",cikma_ihtimali:85},
  {id:"4-17",video:"aws-4",konu:"Neptune",zorluk:"kolay",soru:"Graf veri tabanı ihtiyaçları için hangi AWS servisi kullanılır?",secenekler:{A:"Aurora",B:"Neptune",C:"Redshift",D:"RDS"},dogru:"B",aciklama:"Amazon Neptune graph database servisidir.",cikma_ihtimali:78},
  {id:"4-18",video:"aws-4",konu:"QLDB",zorluk:"orta",soru:"Finansal kayıtlar ve değişiklik geçmişinin güvenilir şekilde tutulması gereken senaryolarda hangi servis öne çıkar?",secenekler:{A:"QLDB",B:"Memcached",C:"S3",D:"EFS"},dogru:"A",aciklama:"QLDB ledger tabanlı veri saklama için tasarlanmıştır.",cikma_ihtimali:78},
  {id:"4-19",video:"aws-4",konu:"DocumentDB",zorluk:"orta",soru:"MongoDB uyumlu doküman tabanlı AWS servisi hangisidir?",secenekler:{A:"DocumentDB",B:"Aurora",C:"Neptune",D:"Redshift"},dogru:"B",aciklama:"DocumentDB MongoDB benzeri doküman yapılarıyla çalışır.",cikma_ihtimali:78},
  {id:"4-22",video:"aws-4",konu:"Read Replica",zorluk:"orta",soru:"Read Replica'nın temel amacı nedir?",secenekler:{A:"Yazma işlemlerini artırmak",B:"Sadece yedek almak",C:"Okuma yükünü azaltmak",D:"Şifreleme yapmak"},dogru:"C",aciklama:"Read Replica okuma sorgularını ana veritabanından ayırır.",cikma_ihtimali:88},
  {id:"4-23",video:"aws-4",konu:"Read Replica",zorluk:"zor",soru:"Yoğun okuma trafiği alan bir sistemde performansı artırmak için hangi yaklaşım tercih edilir?",secenekler:{A:"Storage azaltmak",B:"Read Replica kullanmak",C:"Database silmek",D:"Subnet değiştirmek"},dogru:"B",aciklama:"Read Replica okuma yükünü dağıtır.",cikma_ihtimali:88},
  {id:"4-24",video:"aws-4",konu:"ElastiCache",zorluk:"orta",soru:"Amazon ElastiCache'in temel görevi nedir?",secenekler:{A:"Veri ambarı oluşturmak",B:"Veri tabanı sorgularını önbelleğe almak",C:"Dosya depolamak",D:"DNS yönetmek"},dogru:"B",aciklama:"ElastiCache sık kullanılan verileri önbellekte tutar.",cikma_ihtimali:88},
  {id:"4-25",video:"aws-4",konu:"Caching",zorluk:"orta",soru:"Bir kullanıcının aynı sorguyu kısa aralıklarla tekrar etmesi durumunda performansı artıran mekanizma hangisidir?",secenekler:{A:"Sharding",B:"Caching",C:"Partitioning",D:"Compression"},dogru:"B",aciklama:"Cache sayesinde tekrar eden sorgular hızlı döner.",cikma_ihtimali:85},
  {id:"4-27",video:"aws-4",konu:"ElastiCache",zorluk:"kolay",soru:"ElastiCache üzerinde yaygın kullanılan teknolojilerden biri hangisidir?",secenekler:{A:"Redis",B:"Oracle",C:"PostgreSQL",D:"Neptune"},dogru:"A",aciklama:"Redis ElastiCache tarafından desteklenir.",cikma_ihtimali:85},
  {id:"4-28",video:"aws-4",konu:"ElastiCache",zorluk:"kolay",soru:"ElastiCache üzerinde kullanılan diğer yaygın teknoloji hangisidir?",secenekler:{A:"MongoDB",B:"Memcached",C:"Redshift",D:"Aurora"},dogru:"B",aciklama:"Memcached ElastiCache'in desteklediği çözümlerden biridir.",cikma_ihtimali:85},
  {id:"4-29",video:"aws-4",konu:"Aurora",zorluk:"orta",soru:"Amazon Aurora aşağıdaki veri tabanlarından hangileriyle uyumludur?",secenekler:{A:"Oracle ve SQL Server",B:"MySQL ve PostgreSQL",C:"MongoDB ve Redis",D:"MariaDB ve Redis"},dogru:"B",aciklama:"Aurora MySQL ve PostgreSQL uyumludur.",cikma_ihtimali:90},
  {id:"4-30",video:"aws-4",konu:"Aurora",zorluk:"orta",soru:"Aurora için aşağıdaki ifadelerden hangisi doğrudur?",secenekler:{A:"Sadece Oracle çalıştırır",B:"NoSQL veri tabanıdır",C:"Serverless seçeneği vardır",D:"Cache servisidir"},dogru:"C",aciklama:"Aurora'nın serverless sürümü bulunmaktadır.",cikma_ihtimali:88},
  {id:"4-31",video:"aws-4",konu:"Aurora",zorluk:"zor",soru:"Bir projede MariaDB kullanılması zorunluysa hangi tercih yanlıştır?",secenekler:{A:"RDS MariaDB",B:"Aurora kullanmak",C:"RDS kullanmak",D:"MariaDB engine seçmek"},dogru:"B",aciklama:"Aurora yalnızca MySQL ve PostgreSQL destekler.",cikma_ihtimali:82},
  {id:"4-34",video:"aws-4",konu:"Backup",zorluk:"orta",soru:"Aurora'nın yedekleri hangi AWS servisi üzerinde tutulur?",secenekler:{A:"EFS",B:"CloudFront",C:"S3",D:"EC2"},dogru:"C",aciklama:"Aurora yedeklerini S3 üzerinde saklar.",cikma_ihtimali:80},
  {id:"4-35",video:"aws-4",konu:"Aurora",zorluk:"orta",soru:"Aurora'nın desteklediği maksimum depolama kapasitesi ne kadardır?",secenekler:{A:"1 TB",B:"16 TB",C:"32 TB",D:"64 TB"},dogru:"D",aciklama:"Aurora için 64 TB kapasite vurgulanmıştır.",cikma_ihtimali:78},
  {id:"4-36",video:"aws-4",konu:"Replication",zorluk:"orta",soru:"Master ve Read Replica mimarisinde yazma işlemleri genellikle nerede yapılır?",secenekler:{A:"Read Replica",B:"Master",C:"Cache",D:"S3"},dogru:"B",aciklama:"Yazma işlemleri ana veritabanında gerçekleştirilir.",cikma_ihtimali:82},
  {id:"4-37",video:"aws-4",konu:"Database Availability",zorluk:"zor",soru:"Database motoru zarar gördüğünde yeni bir örneğin otomatik ayağa kalkması hangi hedefe hizmet eder?",secenekler:{A:"Veri sıkıştırma",B:"Zero Downtime",C:"Cache Temizleme",D:"Log Arşivleme"},dogru:"B",aciklama:"Kesintisiz hizmet için otomatik devreye alma yapılır.",cikma_ihtimali:85},
  {id:"4-39",video:"aws-4",konu:"Multi-Master",zorluk:"zor",soru:"Birden fazla veritabanının aynı anda aktif çalıştığı yapı hangisidir?",secenekler:{A:"Single Master",B:"Cold Backup",C:"Multi-Master",D:"Archive Mode"},dogru:"C",aciklama:"Multi-master yapısında birden fazla aktif veritabanı bulunur.",cikma_ihtimali:80},
  {id:"4-40",video:"aws-4",konu:"Serverless",zorluk:"kolay",soru:"Serverless yaklaşımında sorumluluğun büyük bölümü kimdedir?",secenekler:{A:"Son kullanıcı",B:"Veritabanı yöneticisi",C:"Cloud Provider",D:"Ağ yöneticisi"},dogru:"C",aciklama:"Serverless modelinde altyapı sağlayıcı tarafından yönetilir.",cikma_ihtimali:82},
  {id:"4-42",video:"aws-4",konu:"Redshift",zorluk:"orta",soru:"Petabyte seviyesinde veri analizi için hangi servis önerilmiştir?",secenekler:{A:"Neptune",B:"Redshift",C:"QLDB",D:"ElastiCache"},dogru:"B",aciklama:"Redshift büyük veri ambarı senaryoları için uygundur.",cikma_ihtimali:85},
  {id:"4-43",video:"aws-4",konu:"DynamoDB",zorluk:"orta",soru:"DynamoDB hakkında aşağıdaki ifadelerden hangisi doğrudur?",secenekler:{A:"İlişkisel veri tabanıdır",B:"AWS tarafından geliştirilen NoSQL servisidir",C:"Sadece cache için kullanılır",D:"Sadece Oracle destekler"},dogru:"B",aciklama:"DynamoDB AWS'in NoSQL veritabanıdır.",cikma_ihtimali:88},
  {id:"4-44",video:"aws-4",konu:"DynamoDB",zorluk:"orta",soru:"DynamoDB'nin belirtilen özelliklerinden biri hangisidir?",secenekler:{A:"Lambda ile entegre çalışabilmesi",B:"Sadece tek AZ desteği",C:"Oracle bağımlılığı",D:"Cache servisi olması"},dogru:"A",aciklama:"Lambda entegrasyonu desteklenmektedir.",cikma_ihtimali:85},
  {id:"4-45",video:"aws-4",konu:"Availability Zone",zorluk:"orta",soru:"DynamoDB mimarilerinde yüksek erişilebilirlik için hangi yapı vurgulanmıştır?",secenekler:{A:"Tek Availability Zone",B:"Birden fazla Availability Zone",C:"Sadece Edge Location",D:"Tek sunucu"},dogru:"B",aciklama:"Birden fazla AZ kullanımı gösterilmiştir.",cikma_ihtimali:82},
  {id:"4-46",video:"aws-4",konu:"Timestream",zorluk:"orta",soru:"Amazon Timestream için aşağıdaki ifadelerden hangisi doğrudur?",secenekler:{A:"Graph Database'dir",B:"Serverless zaman serisi veritabanıdır",C:"Cache servisidir",D:"Data Warehouse çözümüdür"},dogru:"B",aciklama:"Timestream zaman serileri için serverless yapı sunar.",cikma_ihtimali:75},
  {id:"4-47",video:"aws-4",konu:"QLDB",zorluk:"orta",soru:"QLDB hangi sektörlerde kullanılabilir?",secenekler:{A:"Finans ve bankacılık",B:"Sadece oyun sektörü",C:"Sadece medya",D:"Sadece eğitim"},dogru:"A",aciklama:"Finansal ve kayıt bütünlüğü gerektiren alanlar örnek verilmiştir.",cikma_ihtimali:75},
  {id:"4-48",video:"aws-4",konu:"Active-Active",zorluk:"zor",soru:"Active-Active mimaride aşağıdaki ifadelerden hangisi doğrudur?",secenekler:{A:"Sadece bir sistem çalışır",B:"İki sistem de aktif çalışır",C:"Yedek sistem tamamen kapalıdır",D:"Güncelleme yapılmaz"},dogru:"B",aciklama:"Her iki taraf da aynı anda aktif çalışır.",cikma_ihtimali:82},
  {id:"4-49",video:"aws-4",konu:"Active-Passive",zorluk:"zor",soru:"Active-Passive mimaride pasif sistemin temel rolü nedir?",secenekler:{A:"Sürekli yazma yapmak",B:"Ana sistemle yarışmak",C:"Gerektiğinde devreye girmek",D:"Cache sunmak"},dogru:"C",aciklama:"Pasif sistem bekler ve gerektiğinde aktif olur.",cikma_ihtimali:80},
  {id:"4-50",video:"aws-4",konu:"EFS",zorluk:"orta",soru:"EFS'nin kullanım amaçlarından biri olarak ne belirtilmiştir?",secenekler:{A:"Database cache oluşturmak",B:"EC2 sistem dosyalarını paylaşmak ve güncellemeleri yaymak",C:"DNS çözümlemek",D:"SQL sorgularını hızlandırmak"},dogru:"B",aciklama:"EFS makineler arasında ortak dosya erişimi için kullanılabilir.",cikma_ihtimali:78},

  /* ════════════════ aws-3 ════════════════ */
  {id:"3-1",video:"aws-3",konu:"Compute Layer",zorluk:"kolay",soru:"AWS'te Compute Layer kapsamında aşağıdaki servislerden hangisi yer alır?",secenekler:{A:"Amazon S3",B:"Amazon EC2",C:"Amazon Route 53",D:"Amazon CloudFront"},dogru:"B",aciklama:"EC2 AWS'in sanal makine hizmetidir ve Compute Layer'ın temel bileşenidir.",cikma_ihtimali:82},
  {id:"3-4",video:"aws-3",konu:"Availability Zone",zorluk:"orta",soru:"Availability Zone'lar arasındaki ağ trafiği nasıl iletilir?",secenekler:{A:"Şifrelenmeden",B:"Sadece UDP ile",C:"Şifreli olarak",D:"Sadece internet üzerinden"},dogru:"C",aciklama:"AZ'ler arasındaki trafik encrypted şifreli olarak taşınır.",cikma_ihtimali:85},
  {id:"3-6",video:"aws-3",konu:"Pricing Models",zorluk:"kolay",soru:"AWS'in kullandığın kadar öde modeli aşağıdakilerden hangisidir?",secenekler:{A:"Reserved Instance",B:"Saving Plan",C:"On-Demand",D:"Dedicated Host"},dogru:"C",aciklama:"On-Demand modeli kaynakları kullandıkça ödeme yapılmasını sağlar.",cikma_ihtimali:88},
  {id:"3-7",video:"aws-3",konu:"Reserved Instance",zorluk:"orta",soru:"Reserved Instance modelinin temel amacı aşağıdakilerden hangisidir?",secenekler:{A:"Kısa süreli test ortamı sağlamak",B:"Müşteriye ayrılmış kapasite sunmak",C:"Otomatik ölçeklendirme yapmak",D:"Ücretsiz kullanım hakkı vermek"},dogru:"B",aciklama:"Reserved Instance belirli süreyle müşteriye ayrılmış kapasite sağlar.",cikma_ihtimali:85},
  {id:"3-8",video:"aws-3",konu:"Spot Instance",zorluk:"orta",soru:"Spot Instance kullanımı en çok hangi senaryoda tercih edilir?",secenekler:{A:"Kritik üretim veritabanı",B:"Uzun süreli kesintisiz iş yükü",C:"Kısa süreli test ortamı",D:"Yüksek güvenlikli finans uygulaması"},dogru:"C",aciklama:"Spot Instance'lar kısa süreli ve kesinti toleransı olan test iş yükleri için uygundur.",cikma_ihtimali:85},
  {id:"3-9",video:"aws-3",konu:"Spot Instance",zorluk:"orta",soru:"Spot Instance'ların uzun süreli üretim ortamları için uygun olmamasının temel nedeni nedir?",secenekler:{A:"Çok pahalı olmaları",B:"AWS tarafından geri çağrılabilmeleri",C:"Sadece Windows desteklemeleri",D:"Yetersiz CPU sağlamaları"},dogru:"B",aciklama:"AWS ihtiyaç duyduğunda Spot Instance'ı geri çağırabilir bu nedenle kesinti riski vardır.",cikma_ihtimali:88},
  {id:"3-11",video:"aws-3",konu:"Lambda",zorluk:"orta",soru:"Bir S3 bucket'ına yüklenen fotoğrafın otomatik olarak yeniden boyutlandırılması için en uygun servis hangisidir?",secenekler:{A:"Amazon EC2",B:"Amazon RDS",C:"AWS Lambda",D:"Amazon Route 53"},dogru:"C",aciklama:"Lambda olay tetiklemeli event-driven kod çalıştırma için kullanılır.",cikma_ihtimali:90},
  {id:"3-13",video:"aws-3",konu:"EC2",zorluk:"kolay",soru:"AWS'te sanal makine kavramı için aşağıdaki terimlerden hangisi kullanılır?",secenekler:{A:"Bucket",B:"Instance",C:"Function",D:"Queue"},dogru:"B",aciklama:"EC2 sanal makineleri AWS terminolojisinde instance olarak adlandırılır.",cikma_ihtimali:85},
  {id:"3-14",video:"aws-3",konu:"EC2",zorluk:"kolay",soru:"EC2 üzerinde aşağıdaki işletim sistemlerinden hangisi çalıştırılabilir?",secenekler:{A:"Sadece Linux",B:"Sadece Windows",C:"Linux Windows ve Mac",D:"Sadece Mac"},dogru:"C",aciklama:"Linux Windows ve Mac işletim sistemlerinin çalıştırılabildiği belirtilmiştir.",cikma_ihtimali:80},
  {id:"3-19",video:"aws-3",konu:"AMI",zorluk:"orta",soru:"AMI (Amazon Machine Image) aşağıdakilerden hangisini sağlar?",secenekler:{A:"Ağ yönlendirmesi",B:"Sunucu yapılandırmasının imaj olarak saklanmasını",C:"Veritabanı yedeklemesini",D:"DNS çözümlemesini"},dogru:"B",aciklama:"AMI işletim sistemi ve kurulu bileşenlerin imaj olarak saklanmasını sağlar.",cikma_ihtimali:88},
  {id:"3-20",video:"aws-3",konu:"AMI",zorluk:"orta",soru:"Bir EC2 instance'ı arızalandığında aynı yapılandırmayla hızlıca ayağa kaldırmak için hangi özellik kullanılır?",secenekler:{A:"Security Group",B:"Elastic IP",C:"AMI",D:"NAT Gateway"},dogru:"C",aciklama:"AMI kullanılarak aynı yapılandırmaya sahip yeni bir instance hızlıca oluşturulabilir.",cikma_ihtimali:85},
  {id:"3-22",video:"aws-3",konu:"EFS",zorluk:"orta",soru:"Birden fazla EC2 instance'ının aynı dosya sistemini paylaşması gerekiyorsa hangi servis daha uygundur?",secenekler:{A:"EBS",B:"EFS",C:"S3",D:"Glacier"},dogru:"B",aciklama:"EFS birden fazla EC2 tarafından paylaşılabilen dosya sistemidir.",cikma_ihtimali:85},
  {id:"3-23",video:"aws-3",konu:"High Availability",zorluk:"orta",soru:"8xLarge yerine 8 adet xLarge instance kullanmanın temel avantajı nedir?",secenekler:{A:"Her zaman daha ucuz olması",B:"Daha yüksek tek çekirdek performansı sağlaması",C:"Arıza durumunda sistemin tamamen durmamasını sağlaması",D:"Daha az ağ trafiği oluşturması"},dogru:"C",aciklama:"Bir instance arızalansa bile diğerleri çalışmaya devam ederek yüksek erişilebilirlik sağlar.",cikma_ihtimali:88},
  {id:"3-25",video:"aws-3",konu:"Graviton",zorluk:"orta",soru:"AWS Graviton işlemcileri hangi mimariye dayanır?",secenekler:{A:"x86",B:"PowerPC",C:"ARM",D:"SPARC"},dogru:"C",aciklama:"Graviton işlemciler AWS'in ARM tabanlı işlemcileridir.",cikma_ihtimali:78},
  {id:"3-26",video:"aws-3",konu:"Instance Types",zorluk:"orta",soru:"CPU yoğun iş yükleri için hangi instance ailesi tercih edilir?",secenekler:{A:"R",B:"T",C:"C",D:"G"},dogru:"C",aciklama:"C serisi compute-optimized CPU yoğun iş yükleri için tasarlanmıştır.",cikma_ihtimali:85},
  {id:"3-27",video:"aws-3",konu:"Instance Types",zorluk:"orta",soru:"Bellek (RAM) yoğun iş yükleri için hangi instance ailesi daha uygundur?",secenekler:{A:"R",B:"C",C:"T",D:"G"},dogru:"A",aciklama:"R serisi memory-optimized iş yükleri için kullanılır.",cikma_ihtimali:85},
  {id:"3-28",video:"aws-3",konu:"Instance Types",zorluk:"orta",soru:"Burstable kredi mekanizmasına sahip ve küçük iş yükleri için uygun instance ailesi hangisidir?",secenekler:{A:"R",B:"C",C:"G",D:"T"},dogru:"D",aciklama:"T serisi burstable CPU kredi modeliyle çalışır.",cikma_ihtimali:82},
  {id:"3-29",video:"aws-3",konu:"T Series",zorluk:"zor",soru:"T serisi bir instance'da CPU kredi limiti dolarsa ne olur?",secenekler:{A:"Instance otomatik kapanır",B:"Ağ bağlantısı kesilir",C:"Performans düşebilir ve sistem yavaşlayabilir",D:"Diskler silinir"},dogru:"C",aciklama:"CPU kredisi tükendiğinde burst performansı düşer ve instance yavaşlayabilir.",cikma_ihtimali:80},
  {id:"3-30",video:"aws-3",konu:"GPU",zorluk:"orta",soru:"Yapay zeka ve yoğun grafik iş yükleri için hangi tip kaynak daha kritiktir?",secenekler:{A:"Düşük gecikmeli DNS",B:"Yüksek IOPS disk",C:"GPU (ekran kartı)",D:"NAT Gateway"},dogru:"C",aciklama:"AI ve grafik iş yükleri çoğunlukla GPU kaynaklarına ihtiyaç duyar.",cikma_ihtimali:80},
  {id:"3-31",video:"aws-3",konu:"EC2",zorluk:"kolay",soru:"AWS EC2 üzerinde vCPU kavramı neyi ifade eder?",secenekler:{A:"Sanal depolama alanını",B:"Sanal işlemci kaynağını",C:"Sanal ağ kartını",D:"Sanal güvenlik duvarını"},dogru:"B",aciklama:"vCPU instance'ın kullanabildiği sanal işlemci kaynağını ifade eder.",cikma_ihtimali:82},
  {id:"3-32",video:"aws-3",konu:"Networking",zorluk:"kolay",soru:"Bir region'a en yakın lokasyonu seçmek genellikle hangi metriği düşürür?",secenekler:{A:"Disk kapasitesi",B:"Maliyet",C:"Latency",D:"RAM kullanımı"},dogru:"C",aciklama:"Kullanıcıya yakın region seçmek ağ gecikmesini latency azaltır.",cikma_ihtimali:82},
  {id:"3-35",video:"aws-3",konu:"Container Services",zorluk:"kolay",soru:"AWS'te Docker tabanlı container yönetimi için hangi servis kullanılır?",secenekler:{A:"EKS",B:"Lambda",C:"ECS",D:"EC2 Auto Scaling"},dogru:"C",aciklama:"ECS Docker container'larını yönetmek için kullanılır.",cikma_ihtimali:85},
  {id:"3-36",video:"aws-3",konu:"Container Services",zorluk:"kolay",soru:"AWS'te Kubernetes tabanlı container orkestrasyonu için hangi servis kullanılır?",secenekler:{A:"ECS",B:"EKS",C:"Lambda",D:"S3"},dogru:"B",aciklama:"EKS Kubernetes yönetimi için AWS servisidir.",cikma_ihtimali:85},
  {id:"3-37",video:"aws-3",konu:"Auto Scaling",zorluk:"orta",soru:"EC2 instance'larını otomatik ölçeklendirmek için hangi özellik kullanılır?",secenekler:{A:"Route 53",B:"CloudFront",C:"Auto Scaling Group",D:"Security Group"},dogru:"C",aciklama:"Auto Scaling Group EC2 instance sayısını otomatik yönetir.",cikma_ihtimali:90},
  {id:"3-38",video:"aws-3",konu:"Fargate",zorluk:"orta",soru:"ECS ve EKS ile birlikte sunucusuz container çalıştırma için hangi servis kullanılabilir?",secenekler:{A:"Elastic Beanstalk",B:"Fargate",C:"CloudTrail",D:"SQS"},dogru:"B",aciklama:"Fargate altyapı yönetmeden container çalıştırmayı sağlar.",cikma_ihtimali:85},
  {id:"3-39",video:"aws-3",konu:"EC2 Networking",zorluk:"kolay",soru:"Bir EC2 instance'ına güvenli uzaktan bağlantı kurmak için hangi protokol kullanılır?",secenekler:{A:"FTP",B:"SMTP",C:"SSH",D:"SNMP"},dogru:"C",aciklama:"SSH EC2 instance'larına güvenli komut satırı erişimi sağlar.",cikma_ihtimali:85},
  {id:"3-40",video:"aws-3",konu:"Key Pair",zorluk:"orta",soru:"EC2 instance'ına SSH ile bağlanabilmek için aşağıdakilerden hangisi gereklidir?",secenekler:{A:"IAM Role",B:"Key Pair",C:"Elastic IP",D:"CloudWatch Alarm"},dogru:"B",aciklama:"SSH erişimi için key pair oluşturulması ve saklanması gerekir.",cikma_ihtimali:85},
  {id:"3-41",video:"aws-3",konu:"Security Group",zorluk:"orta",soru:"EC2 instance'ının ağ trafiğini kontrol etmek için hangi yapı kullanılır?",secenekler:{A:"Route Table",B:"NAT Gateway",C:"Security Group",D:"CloudFormation"},dogru:"C",aciklama:"Security Group instance seviyesinde gelen ve giden trafiği kontrol eder.",cikma_ihtimali:88},
  {id:"3-43",video:"aws-3",konu:"VPC",zorluk:"orta",soru:"EC2 instance'ı başlatılırken kullanıcı özel bir VPC tanımlamazsa ne olur?",secenekler:{A:"Instance başlatılamaz",B:"Otomatik olarak default VPC kullanılır",C:"Sadece public subnet oluşturulur",D:"RDS instance'ı da oluşturulur"},dogru:"B",aciklama:"AWS varsayılan default VPC'yi kullanarak instance başlatabilir.",cikma_ihtimali:82},
  {id:"3-44",video:"aws-3",konu:"Networking",zorluk:"orta",soru:"CIDR blokları VPC içinde hangi amaçla kullanılır?",secenekler:{A:"Depolama sınıflarını tanımlamak",B:"IP adres aralığını belirlemek",C:"CPU kaynaklarını ayırmak",D:"Güvenlik kurallarını yazmak"},dogru:"B",aciklama:"CIDR VPC ve subnet'lerin IP adres aralıklarını tanımlar.",cikma_ihtimali:82},
  {id:"3-46",video:"aws-3",konu:"Pricing Calculator",zorluk:"orta",soru:"AWS mimarisinin aylık maliyetini tahmin etmek için hangi araç kullanılmıştır?",secenekler:{A:"CloudWatch",B:"AWS Pricing Calculator",C:"Trusted Advisor",D:"Cost Explorer"},dogru:"B",aciklama:"Maliyet hesaplamaları AWS Pricing Calculator ile yapılmıştır.",cikma_ihtimali:72},
  {id:"3-48",video:"aws-3",konu:"EC2 Lifecycle",zorluk:"kolay",soru:"Kullanılmayan bir EC2 instance'ını geçici olarak durdurmak için hangi işlem uygulanır?",secenekler:{A:"Terminate",B:"Delete",C:"Stop",D:"Detach"},dogru:"C",aciklama:"Stop işlemi instance'ı geçici olarak durdurur.",cikma_ihtimali:85},
  {id:"3-49",video:"aws-3",konu:"EC2 Lifecycle",zorluk:"kolay",soru:"Bir EC2 instance'ını tamamen silmek için hangi işlem uygulanır?",secenekler:{A:"Stop",B:"Hibernate",C:"Suspend",D:"Terminate"},dogru:"D",aciklama:"Terminate işlemi instance'ı kalıcı olarak siler.",cikma_ihtimali:88},
  {id:"3-51",video:"aws-3",konu:"Networking",zorluk:"orta",soru:"Public subnet içindeki kaynakların internete erişebilmesi için genellikle hangi bileşen gerekir?",secenekler:{A:"NAT Gateway",B:"Internet Gateway",C:"Route 53",D:"CloudFront"},dogru:"B",aciklama:"Internet Gateway VPC içindeki public kaynakların internete erişimini sağlar.",cikma_ihtimali:85},
  {id:"3-52",video:"aws-3",konu:"Networking",zorluk:"zor",soru:"Özel private subnet içindeki kaynakların internete çıkabilmesi için genellikle hangi bileşen kullanılır?",secenekler:{A:"Internet Gateway",B:"NAT Gateway",C:"Elastic IP",D:"Security Group"},dogru:"B",aciklama:"NAT Gateway private subnet'teki kaynakların dış dünyaya çıkış yapmasını sağlar.",cikma_ihtimali:88},
  {id:"3-53",video:"aws-3",konu:"Load Balancing",zorluk:"orta",soru:"Web sunucularının önünde hangi yük dengeleme bileşeni yer almaktadır?",secenekler:{A:"Network Load Balancer",B:"Classic Load Balancer",C:"Application Load Balancer",D:"Gateway Load Balancer"},dogru:"C",aciklama:"Mimaride Application Load Balancer kullanıldığı belirtilmiştir.",cikma_ihtimali:82},
  {id:"3-54",video:"aws-3",konu:"Database High Availability",zorluk:"zor",soru:"Bir RDS veritabanının farklı Availability Zone'larda yedekli çalışmasını sağlamak için hangi özellik kullanılır?",secenekler:{A:"Read Replica",B:"Multi-AZ",C:"Auto Scaling",D:"Cross-Region Backup"},dogru:"B",aciklama:"Multi-AZ seçeneği RDS için yüksek erişilebilirlik sağlar.",cikma_ihtimali:88},
  {id:"3-55",video:"aws-3",konu:"Instance Families",zorluk:"orta",soru:"Genel amaçlı web uygulamaları için hangi instance aileleri önerilmektedir?",secenekler:{A:"T ve M",B:"C ve R",C:"G ve P",D:"D ve I"},dogru:"A",aciklama:"Web uygulamaları için T ve M serilerinin uygun olduğu belirtilmiştir.",cikma_ihtimali:80},
  {id:"3-57",video:"aws-3",konu:"Compute Layer",zorluk:"orta",soru:"Compute Layer kapsamında hangisi doğrudan container orkestrasyonu ile ilişkilidir?",secenekler:{A:"EKS",B:"S3",C:"Route 53",D:"CloudTrail"},dogru:"A",aciklama:"EKS Kubernetes tabanlı container orkestrasyon hizmetidir.",cikma_ihtimali:82},
  {id:"3-58",video:"aws-3",konu:"Serverless",zorluk:"zor",soru:"Altyapı yönetimi patch işlemleri ve sunucu güncellemeleriyle uğraşmak istemiyorum diyen mühendis hangi modeli tercih etmelidir?",secenekler:{A:"Bare Metal",B:"IaaS",C:"Serverless",D:"Dedicated Host"},dogru:"C",aciklama:"Serverless modelinde altyapı yönetimi büyük ölçüde sağlayıcı tarafından gerçekleştirilir.",cikma_ihtimali:88},

  /* ════════════════ aws-2 ════════════════ */
  {id:"2-1",video:"aws-2",konu:"DNS",zorluk:"kolay",soru:"AWS'de DNS hizmeti hangi servis tarafından sağlanır?",secenekler:{A:"CloudFront",B:"Route 53",C:"API Gateway",D:"Direct Connect"},dogru:"B",aciklama:"AWS'de DNS hizmeti Route 53 servisi tarafından sağlanır.",cikma_ihtimali:88},
  {id:"2-3",video:"aws-2",konu:"DNS",zorluk:"kolay",soru:"DNS (Domain Name Service) temel olarak ne işe yarar?",secenekler:{A:"Web sayfalarını şifreler",B:"Alan adlarını IP adreslerine çözümler",C:"Ağ trafiğini dengeler",D:"Veritabanı bağlantısı kurar"},dogru:"B",aciklama:"DNS harflerden oluşan alan adlarını bilgisayarların anlayabileceği IP adreslerine çevirir.",cikma_ihtimali:88},
  {id:"2-4",video:"aws-2",konu:"DNS",zorluk:"orta",soru:"Bir kullanıcı tarayıcıya alan adı yazdığında ilk olarak ne gerçekleşir?",secenekler:{A:"Web sunucusuna doğrudan bağlantı kurulur",B:"DNS sunucusu tarafından alan adı IP adresine çözümlenir",C:"WAF kuralları kontrol edilir",D:"CDN üzerinden içerik çekilir"},dogru:"B",aciklama:"Tarayıcıya yazılan alan adı öncelikle DNS sunucusu tarafından IP adresine çözümlenir.",cikma_ihtimali:85},
  {id:"2-5",video:"aws-2",konu:"WAF",zorluk:"kolay",soru:"AWS WAF kısaltmasının açılımı nedir?",secenekler:{A:"Wide Area Firewall",B:"Web Application Firewall",C:"Wireless Access Framework",D:"Web Authorization Filter"},dogru:"B",aciklama:"WAF Web Application Firewall anlamına gelir.",cikma_ihtimali:85},
  {id:"2-6",video:"aws-2",konu:"WAF",zorluk:"orta",soru:"AWS WAF ile aşağıdaki işlemlerden hangisi yapılabilir?",secenekler:{A:"Belirli ülkelerden gelen trafiği coğrafik olarak engellemek",B:"Veritabanı yedekleme işlemlerini otomatikleştirmek",C:"EC2 makinemakers otomatik ölçeklendirmek",D:"DNS kayıtlarını yönetmek"},dogru:"A",aciklama:"WAF ile belirli ülkelerin IP adreslerini engelleyerek coğrafik bazda erişim kontrolü yapılabilir.",cikma_ihtimali:85},
  {id:"2-7",video:"aws-2",konu:"WAF",zorluk:"zor",soru:"Bir web sitesine belirli ülkelerden yoğun saldırı geldiği tespit ediliyor. Bu saldırıları ülke bazında engellemek için hangi AWS servisi kullanılmalıdır?",secenekler:{A:"Amazon CloudFront",B:"AWS WAF",C:"Amazon Route 53",D:"AWS Shield"},dogru:"B",aciklama:"WAF coğrafik olarak belirli ülkelerden gelen atakları engelleyebilen güvenlik duvarıdır.",cikma_ihtimali:88},
  {id:"2-8",video:"aws-2",konu:"CDN",zorluk:"kolay",soru:"CDN kısaltmasının açılımı nedir?",secenekler:{A:"Cloud Data Network",B:"Content Delivery Network",C:"Central Distribution Node",D:"Compute Driven Network"},dogru:"B",aciklama:"CDN Content Delivery Network yani İçerik Dağıtım Ağı anlamına gelir.",cikma_ihtimali:85},
  {id:"2-9",video:"aws-2",konu:"CloudFront",zorluk:"kolay",soru:"AWS'de CDN hizmeti hangi servis tarafından sağlanır?",secenekler:{A:"Amazon S3",B:"Amazon CloudFront",C:"Amazon ElastiCache",D:"AWS Global Accelerator"},dogru:"B",aciklama:"Amazon CloudFront AWS'in CDN servisidir.",cikma_ihtimali:85},
  {id:"2-10",video:"aws-2",konu:"CloudFront",zorluk:"orta",soru:"CloudFront statik içerik talebi geldiğinde trafiği öncelikle nereye yönlendirir?",secenekler:{A:"Doğrudan EC2 sunucularına",B:"S3 bucket'ına",C:"RDS veritabanına",D:"Lambda fonksiyonuna"},dogru:"B",aciklama:"Statik içerikler S3'te tutulur ve CloudFront bu talebi S3'e yönlendirir.",cikma_ihtimali:85},
  {id:"2-11",video:"aws-2",konu:"CloudFront",zorluk:"zor",soru:"CDN yapısında içerik ilk kez çekildikten sonra ne olur?",secenekler:{A:"Bilgi her seferinde ana sunucudan çekilir",B:"Bilgi kullanıcının bilgisayarında kalıcı olarak depolanır",C:"Bilgi en yakın Edge Location'da cache'lenir ve sonraki kullanıcılara buradan sunulur",D:"Bilgi Route 53 üzerinde saklanır"},dogru:"C",aciklama:"CDN yapısında içerik ilk çekildiğinde en yakın Edge Location'da cache'lenir.",cikma_ihtimali:88},
  {id:"2-12",video:"aws-2",konu:"Edge Location",zorluk:"kolay",soru:"Edge Location kavramı AWS'de ne anlama gelir?",secenekler:{A:"Availability Zone'ların merkezindeki veri merkezi",B:"İçeriklerin cache'lendiği ve kullanıcılara yakın konumlanan noktalar",C:"Yalnızca Kuzey Amerika'da bulunan sunucu çiftlikleri",D:"VPC içindeki özel ağ alanları"},dogru:"B",aciklama:"Edge Location'lar CloudFront aracılığıyla içeriklerin cache'lendiği kullanıcılara coğrafi olarak yakın noktalardır.",cikma_ihtimali:85},
  {id:"2-15",video:"aws-2",konu:"S3",zorluk:"kolay",soru:"Amazon S3 kısaltması neyi ifade eder?",secenekler:{A:"Simple Storage Service",B:"Secure Server System",C:"Scalable Service Setup",D:"Standard Storage Server"},dogru:"A",aciklama:"S3 Simple Storage Service olup baş harfleri 3 S'ten oluştuğu için S3 olarak adlandırılır.",cikma_ihtimali:88},
  {id:"2-16",video:"aws-2",konu:"S3",zorluk:"orta",soru:"Bir web sitesinin statik verileri için AWS'de hangi servis kullanılmalıdır?",secenekler:{A:"Amazon RDS",B:"Amazon EC2",C:"Amazon S3",D:"Amazon DynamoDB"},dogru:"C",aciklama:"Statik veriler fotoğraflar ve sabit bilgiler S3 bucket'larında depolanır.",cikma_ihtimali:85},
  {id:"2-19",video:"aws-2",konu:"Region / AZ",zorluk:"orta",soru:"Aşağıdaki ifadelerden hangisi Availability Zone için DOĞRUDUR?",secenekler:{A:"Her Region'da yalnızca bir tane bulunur",B:"İzole veri merkezleridir ve high availability sağlamak için kullanılır",C:"Sadece ABD'de bulunan özel alanlardır",D:"Edge Location'ların bir alt kümesidir"},dogru:"B",aciklama:"AZ'ler izole ortamlardaki veri merkezleridir ve yüksek erişilebilirlik için kullanılır.",cikma_ihtimali:88},
  {id:"2-25",video:"aws-2",konu:"VPC",zorluk:"kolay",soru:"VPC kısaltmasının açılımı nedir?",secenekler:{A:"Virtual Public Cloud",B:"Virtual Private Cloud",C:"Virtual Protected Connection",D:"Virtual Private Container"},dogru:"B",aciklama:"VPC Virtual Private Cloud anlamına gelir.",cikma_ihtimali:88},
  {id:"2-26",video:"aws-2",konu:"VPC",zorluk:"orta",soru:"VPC'nin temel amacı aşağıdakilerden hangisidir?",secenekler:{A:"Farklı Region'lardaki AZ'leri birbirine bağlamak",B:"Aynı Region içindeki AZ'leri aynı sanal ağ içinde buluşturmak",C:"Edge Location'ları yönetmek",D:"DNS kayıtlarını saklamak"},dogru:"B",aciklama:"VPC farklı Availability Zone'lardaki kaynakları aynı sanal özel ağ içinde buluşturur.",cikma_ihtimali:88},
  {id:"2-27",video:"aws-2",konu:"CIDR",zorluk:"kolay",soru:"VPC içindeki ağ adresleme yapısı ne ile tanımlanır?",secenekler:{A:"DNS kayıtları",B:"CIDR blokları",C:"Security Group'lar",D:"Route Table'lar"},dogru:"B",aciklama:"VPC içindeki ağ yapısı CIDR blokları ile tanımlanır.",cikma_ihtimali:85},
  {id:"2-28",video:"aws-2",konu:"Subnet",zorluk:"kolay",soru:"AWS'de subnet'ler hangi iki türe ayrılır?",secenekler:{A:"Internal ve External",B:"Public ve Private",C:"Primary ve Secondary",D:"Static ve Dynamic"},dogru:"B",aciklama:"Subnet'ler Public ve Private olarak ikiye ayrılır.",cikma_ihtimali:88},
  {id:"2-29",video:"aws-2",konu:"Subnet",zorluk:"orta",soru:"Bir AWS mimarisinde veritabanı sunucuları genellikle hangi subnet türünde konumlandırılır?",secenekler:{A:"Public subnet",B:"Private subnet",C:"Edge subnet",D:"Default subnet"},dogru:"B",aciklama:"Veritabanı sunucuları güvenlik nedeniyle private subnet'lerde konumlandırılır.",cikma_ihtimali:88},
  {id:"2-30",video:"aws-2",konu:"Subnet",zorluk:"orta",soru:"Web uygulamasının barındırıldığı EC2 sunucuları genellikle hangi subnet türünde yer alır?",secenekler:{A:"Private subnet",B:"Public subnet",C:"Isolated subnet",D:"NAT subnet"},dogru:"B",aciklama:"Web uygulamalarının barındırıldığı EC2 sunucuları dışarıdan erişilebilmesi için public subnet'lerde konumlanır.",cikma_ihtimali:85},
  {id:"2-31",video:"aws-2",konu:"Internet Gateway",zorluk:"kolay",soru:"Internet Gateway'in temel görevi nedir?",secenekler:{A:"Yalnızca çıkış trafiğini sağlamak",B:"VPC ile internet arasında hem giriş hem çıkış trafiğini sağlamak",C:"Yalnızca DNS çözümlemesi yapmak",D:"Private subnet'ler arasında bağlantı kurmak"},dogru:"B",aciklama:"Internet Gateway hem inbound hem outbound trafiği sağlar VPC'nin internete açılan kapısıdır.",cikma_ihtimali:88},
  {id:"2-32",video:"aws-2",konu:"Internet Gateway",zorluk:"orta",soru:"Bir VPC'nin internet ile iletişim kurabilmesi için hangi bileşen zorunludur?",secenekler:{A:"NAT Gateway",B:"Internet Gateway",C:"VPN",D:"Bastion Host"},dogru:"B",aciklama:"VPC içine dışarıdan girebilmek ve içeriden çıkabilmek için Internet Gateway olmak zorundadır.",cikma_ihtimali:88},
  {id:"2-33",video:"aws-2",konu:"NAT Gateway",zorluk:"kolay",soru:"NAT Gateway hangi trafik yönünde çalışır?",secenekler:{A:"Yalnızca inbound (giriş)",B:"Yalnızca outbound (çıkış)",C:"Hem inbound hem outbound",D:"Yalnızca AZ'ler arası trafik"},dogru:"B",aciklama:"NAT Gateway yalnızca outbound çıkış trafiği için kullanılır tek yönlüdür.",cikma_ihtimali:90},
  {id:"2-34",video:"aws-2",konu:"NAT Gateway",zorluk:"orta",soru:"NAT Gateway'e neden ihtiyaç duyulur?",secenekler:{A:"Public subnet'teki makinelerin birbirine bağlanması için",B:"Private subnet'teki makinelerin patch/update için internete çıkabilmesi için",C:"DNS çözümlemesi için",D:"Veritabanı replikasyonu için"},dogru:"B",aciklama:"Private subnet'teki makinelerin güncelleme yama yükleme gibi işlemler için internete çıkması gerektiğinde NAT Gateway kullanılır.",cikma_ihtimali:90},
  {id:"2-35",video:"aws-2",konu:"NAT Gateway",zorluk:"zor",soru:"Internet Gateway ve NAT Gateway arasındaki temel fark nedir?",secenekler:{A:"Internet Gateway ücretsiz NAT Gateway ücretlidir",B:"Internet Gateway hem giriş hem çıkış sağlarken NAT Gateway yalnızca çıkış sağlar",C:"Internet Gateway private subnet'lerde NAT Gateway public subnet'lerde çalışır",D:"Internet Gateway yalnızca EC2 için NAT Gateway yalnızca RDS için kullanılır"},dogru:"B",aciklama:"Internet Gateway çift yönlü inbound+outbound NAT Gateway ise tek yönlü sadece outbound trafik sağlar.",cikma_ihtimali:92},
  {id:"2-36",video:"aws-2",konu:"NAT Gateway",zorluk:"orta",soru:"NAT Gateway fiziksel olarak hangi subnet türünde yer alır?",secenekler:{A:"Private subnet",B:"Public subnet",C:"Isolated subnet",D:"Database subnet"},dogru:"B",aciklama:"NAT Gateway public subnet'te yer alır ancak hizmeti private subnet'teki makinelerin dışarı çıkışını sağlamaktır.",cikma_ihtimali:85},
  {id:"2-37",video:"aws-2",konu:"Load Balancer",zorluk:"kolay",soru:"Application Load Balancer (ALB) OSI modelinin hangi katmanında çalışır?",secenekler:{A:"3. katman (Ağ)",B:"4. katman (Taşıma)",C:"5. katman (Oturum)",D:"7. katman (Uygulama)"},dogru:"D",aciklama:"Application Load Balancer OSI modelinin 7. katmanı olan uygulama katmanında çalışır.",cikma_ihtimali:90},
  {id:"2-38",video:"aws-2",konu:"Load Balancer",zorluk:"kolay",soru:"Network Load Balancer (NLB) OSI modelinin hangi katmanında çalışır?",secenekler:{A:"2. katman",B:"4. katman",C:"5. katman",D:"7. katman"},dogru:"B",aciklama:"Network Load Balancer OSI modelinin 4. katmanı olan taşıma transport katmanında çalışır.",cikma_ihtimali:88},
  {id:"2-39",video:"aws-2",konu:"Load Balancer",zorluk:"orta",soru:"Web sayfaları için yük dağıtımı yapmak amacıyla hangi Load Balancer türü kullanılır?",secenekler:{A:"Network Load Balancer",B:"Gateway Load Balancer",C:"Application Load Balancer",D:"Classic Load Balancer"},dogru:"C",aciklama:"Web sayfaları için Application Load Balancer kullanılır.",cikma_ihtimali:88},
  {id:"2-40",video:"aws-2",konu:"Autoscaling",zorluk:"orta",soru:"Bir e-ticaret sitesinin günlük 100 kullanıcısı varken kampanya döneminde 100.000 kullanıcıya çıkması durumunda hangi AWS mekanizması devreye girer?",secenekler:{A:"Elastic IP",B:"Auto Scaling",C:"Route 53 Failover",D:"CloudFront Cache"},dogru:"B",aciklama:"Trafik arttığında otomatik olarak yeni makineler ayağa kaldırılır azaldığında kapatılır. Bu mekanizmaya Auto Scaling denir.",cikma_ihtimali:90},
  {id:"2-41",video:"aws-2",konu:"Autoscaling",zorluk:"zor",soru:"Cloud'un kullandığın kadar öde modeline uygun olması için sistem kapasitesi nasıl planlanmalıdır?",secenekler:{A:"Maksimum beklenen trafik için sabit kapasite ayrılmalı",B:"5-10 yıllık büyüme tahminine göre sabit makine alınmalı",C:"Günlük ortalama ihtiyacı karşılayacak minimum kapasite planlanmalı artışlar Auto Scaling ile karşılanmalı",D:"Her AZ'de eşit sayıda sabit makine bulundurulmalı"},dogru:"C",aciklama:"Cloud mantığında minimumda gündelik ihtiyacı karşılayacak şekilde planlama yapılır ve trafik artışı Auto Scaling ile karşılanır.",cikma_ihtimali:88},
  {id:"2-42",video:"aws-2",konu:"Autoscaling",zorluk:"orta",soru:"Auto Scaling ile ayağa kaldırılan makineler trafik düştüğünde ne olur?",secenekler:{A:"Süresiz olarak aktif kalır",B:"Manuel olarak silinmeleri gerekir",C:"Otomatik olarak kapanır terminate edilir",D:"Durdurulur stop ve yedekte bekler"},dogru:"C",aciklama:"Auto Scaling ile ayağa kaldırılan makineler iş bitince otomatik olarak kapanır kaynaklar serbest bırakılır.",cikma_ihtimali:85},
  {id:"2-43",video:"aws-2",konu:"EC2",zorluk:"kolay",soru:"EC2 kısaltmasının açılımı nedir?",secenekler:{A:"Elastic Container Cloud",B:"Elastic Compute Cloud",C:"Enhanced Compute Cluster",D:"Enterprise Cloud Computing"},dogru:"B",aciklama:"EC2 Elastic Compute Cloud anlamına gelir ve AWS'deki sanal makinelerdir.",cikma_ihtimali:88},
  {id:"2-44",video:"aws-2",konu:"EC2",zorluk:"orta",soru:"AWS konsolunda bir EC2 instance'ı terminate etmek ile stop etmek arasındaki fark nedir?",secenekler:{A:"İkisi de aynı işlemi yapar",B:"Stop geçici olarak durdurur terminate kalıcı olarak siler",C:"Stop kalıcı olarak siler terminate geçici durdurur",D:"Stop sadece CPU'yu durdurur terminate belleği temizler"},dogru:"B",aciklama:"Stop makineyi geçici olarak durdurur tekrar başlatılabilir terminate ise makineyi tamamen siler.",cikma_ihtimali:88},
  {id:"2-45",video:"aws-2",konu:"EC2",zorluk:"orta",soru:"Bir EC2 instance'ı oluşturulurken key pair ne amaçla kullanılır?",secenekler:{A:"Veritabanı şifrelemesi için",B:"Makineye güvenli SSH bağlantısı için",C:"Load Balancer yapılandırması için",D:"Auto Scaling politikası için"},dogru:"B",aciklama:"Key pair EC2 makinesine güvenli bağlantı kurmak için kullanılan şifreleme anahtarlarıdır.",cikma_ihtimali:85},
  {id:"2-47",video:"aws-2",konu:"VPN",zorluk:"orta",soru:"AWS mimarisinde VPN'in temel kullanım amacı nedir?",secenekler:{A:"IP adresini gizlemek",B:"Teknik ekibin private subnet'lere güvenli erişim sağlaması",C:"Web sayfasını hızlandırmak",D:"Veritabanı yedeklemesi yapmak"},dogru:"B",aciklama:"VPN mühendislerin ve teknik ekibin private subnet'lerdeki kaynaklara güvenli bir şekilde bağlanması için kullanılır.",cikma_ihtimali:82},
  {id:"2-48",video:"aws-2",konu:"VPN",zorluk:"zor",soru:"VPN ve Bastion Host arasındaki temel fark nedir?",secenekler:{A:"VPN ücretsizdir Bastion Host ücretlidir",B:"VPN'de trafik doğrudan geçer; Bastion Host'ta önce yetki kontrolü yapılır sonra geçilir",C:"VPN yalnızca Linux'ta Bastion Host yalnızca Windows'ta çalışır",D:"VPN public subnet'te Bastion Host private subnet'te bulunur"},dogru:"B",aciklama:"VPN'de trafik doğrudan geçerken Bastion Host'ta önce yetkiniz kontrol edilir ve ardından erişim sağlanır.",cikma_ihtimali:85},
  {id:"2-50",video:"aws-2",konu:"IAM",zorluk:"kolay",soru:"AWS IAM servisi ne için kullanılır?",secenekler:{A:"Sanal makine oluşturmak",B:"Kullanıcı hesapları roller ve yetkileri yönetmek",C:"Veritabanı oluşturmak",D:"Ağ trafiğini izlemek"},dogru:"B",aciklama:"IAM Identity and Access Management kullanıcı hesaplarının oluşturulması rollerin ve izinlerin yönetilmesi için kullanılır.",cikma_ihtimali:92},
  {id:"2-51",video:"aws-2",konu:"MFA",zorluk:"kolay",soru:"MFA kısaltmasının açılımı nedir?",secenekler:{A:"Multiple File Access",B:"Multi Factor Authentication",C:"Managed Firewall Application",D:"Master Function Authorization"},dogru:"B",aciklama:"MFA Multi Factor Authentication yani Çok Faktörlü Kimlik Doğrulama anlamına gelir.",cikma_ihtimali:88},
  {id:"2-52",video:"aws-2",konu:"MFA",zorluk:"zor",soru:"AWS'de root hesabı ile ilgili aşağıdaki ifadelerden hangisi doğrudur?",secenekler:{A:"Root hesap günlük işlemler için kullanılmalıdır",B:"Root hesap sadece hesap kapatma gibi kritik işlemler için kullanılmalı günlük işlemler admin kullanıcısıyla yapılmalıdır",C:"Root hesaba MFA eklenemez",D:"Root hesaptan yeni kullanıcı oluşturulamaz"},dogru:"B",aciklama:"Root hesap yalnızca kritik işlemler için kullanılır günlük işlemler IAM'den oluşturulan admin kullanıcısıyla yapılmalıdır.",cikma_ihtimali:88},
  {id:"2-53",video:"aws-2",konu:"Shared Responsibility",zorluk:"orta",soru:"AWS Sorumluluk Paylaşım Modeli'ne göre aşağıdakilerden hangisi AWS'in sorumluluğundadır?",secenekler:{A:"Müşteri verilerinin güvenliği",B:"Firewall konfigürasyonu",C:"Global altyapı Region'lar AZ'ler ve fiziksel güvenlik",D:"Kullanıcı şifrelerinin yönetimi"},dogru:"C",aciklama:"AWS global altyapı Region AZ Edge Location Compute Storage Database ve Networking altyapısından sorumludur.",cikma_ihtimali:90},
  {id:"2-54",video:"aws-2",konu:"Shared Responsibility",zorluk:"orta",soru:"AWS Sorumluluk Paylaşım Modeli'ne göre aşağıdakilerden hangisi müşterinin sorumluluğundadır?",secenekler:{A:"Fiziksel sunucu bakımı",B:"Availability Zone'ların yönetimi",C:"Veri güvenliği platform güvenliği ve firewall konfigürasyonu",D:"Global ağ altyapısı"},dogru:"C",aciklama:"Müşteri kendi verilerinin güvenliği platform/uygulama güvenliği firewall konfigürasyonu ve şifre yönetiminden sorumludur.",cikma_ihtimali:90},
  {id:"2-55",video:"aws-2",konu:"EBS",zorluk:"kolay",soru:"EBS kısaltması ne anlama gelir?",secenekler:{A:"Elastic Block Storage",B:"Elastic Bandwidth Service",C:"Enhanced Backup System",D:"Elastic Batch Storage"},dogru:"A",aciklama:"EBS Elastic Block Storage anlamına gelir ve tek bir makineye bağlanan disk birimi gibi çalışır.",cikma_ihtimali:88},
  {id:"2-56",video:"aws-2",konu:"EFS",zorluk:"kolay",soru:"EFS kısaltması ne anlama gelir?",secenekler:{A:"Elastic File System",B:"Enhanced File Storage",C:"Elastic Function Service",D:"Extended File Server"},dogru:"A",aciklama:"EFS Elastic File System anlamına gelir ve birden fazla makine tarafından ortak olarak kullanılabilir.",cikma_ihtimali:88},
  {id:"2-57",video:"aws-2",konu:"EBS / EFS",zorluk:"zor",soru:"İki farklı AZ'deki EC2 makinelerinde yapılan bir güncellemenin her iki makinede de geçerli olması isteniyorsa hangi depolama servisi tercih edilmelidir?",secenekler:{A:"EBS",B:"EFS",C:"S3 Glacier",D:"Instance Store"},dogru:"B",aciklama:"EFS birden fazla makineye bağlanabilir ve dosyalar paylaşımlı kullanılır. EBS ise tek bir makineye bağlanır.",cikma_ihtimali:90},
  {id:"2-58",video:"aws-2",konu:"EBS / EFS",zorluk:"orta",soru:"EBS ve EFS arasındaki temel fark nedir?",secenekler:{A:"EBS birden fazla makineye EFS tek makineye bağlanır",B:"EBS tek bir makineye bağlanır EFS birden fazla makine tarafından paylaşılabilir",C:"EBS yalnızca Linux'ta EFS yalnızca Windows'ta çalışır",D:"İkisi arasında fonksiyonel fark yoktur"},dogru:"B",aciklama:"EBS bir hard disk gibi çalışıp tek makineye bağlanırken EFS ortak payda çalışan bir dosya sistemidir.",cikma_ihtimali:90},
  {id:"2-59",video:"aws-2",konu:"RDS",zorluk:"kolay",soru:"AWS RDS kısaltmasının açılımı nedir?",secenekler:{A:"Remote Data Storage",B:"Relational Database Service",C:"Redundant Data System",D:"Real-time Database Server"},dogru:"B",aciklama:"RDS Relational Database Service anlamına gelir ve ilişkisel veritabanlarını yönetmek için kullanılır.",cikma_ihtimali:88},
  {id:"2-60",video:"aws-2",konu:"RDS",zorluk:"orta",soru:"Aşağıdaki veritabanı motorlarından hangisi AWS RDS üzerinde çalıştırılabilir?",secenekler:{A:"MongoDB",B:"Cassandra",C:"PostgreSQL",D:"Redis"},dogru:"C",aciklama:"RDS üzerinde PostgreSQL MySQL MariaDB Oracle gibi ilişkisel veritabanı motorları çalıştırılabilir.",cikma_ihtimali:85},
  {id:"2-61",video:"aws-2",konu:"Aurora",zorluk:"orta",soru:"Amazon Aurora hangi veritabanı motorlarıyla uyumlu çalışır?",secenekler:{A:"Oracle ve SQL Server",B:"MySQL ve PostgreSQL",C:"MongoDB ve Cassandra",D:"Redis ve DynamoDB"},dogru:"B",aciklama:"Amazon Aurora serverless bir yapıda olup sadece MySQL ve PostgreSQL ile çalışır.",cikma_ihtimali:88},
  {id:"2-62",video:"aws-2",konu:"Aurora",zorluk:"orta",soru:"Amazon Aurora'nın diğer RDS motorlarından temel farkı nedir?",secenekler:{A:"Yalnızca NoSQL destekler",B:"Serverless bir yapıya sahiptir",C:"Yalnızca North Virginia'da çalışır",D:"Yalnızca okuma işlemleri için kullanılır"},dogru:"B",aciklama:"Aurora serverless yapıda çalışan bir ilişkisel veritabanıdır ve tüm altyapı sorumluluğu cloud provider'a aittir.",cikma_ihtimali:85},
  {id:"2-63",video:"aws-2",konu:"DynamoDB",zorluk:"kolay",soru:"Amazon DynamoDB hangi veritabanı türündedir?",secenekler:{A:"Relational (İlişkisel)",B:"NoSQL",C:"Graph",D:"Time Series"},dogru:"B",aciklama:"DynamoDB AWS'in NoSQL veritabanı servisidir.",cikma_ihtimali:90},
  {id:"2-64",video:"aws-2",konu:"Redshift",zorluk:"kolay",soru:"Amazon Redshift hangi amaçla kullanılır?",secenekler:{A:"Gerçek zamanlı mesajlaşma",B:"Veri analizi ve veri ambarı",C:"DNS yönetimi",D:"Container orkestrasyon"},dogru:"B",aciklama:"Redshift analiz amaçlı kullanılan bir veri ambarı data warehouse servisidir.",cikma_ihtimali:82},
  {id:"2-65",video:"aws-2",konu:"Lambda",zorluk:"kolay",soru:"AWS Lambda hangi yapı türünde çalışır?",secenekler:{A:"Sanal makine (VM) tabanlı",B:"Serverless (sunucusuz)",C:"Container tabanlı",D:"Bare metal"},dogru:"B",aciklama:"Lambda serverless yapıda çalışan bir tetikleyici servistir.",cikma_ihtimali:88},
  {id:"2-66",video:"aws-2",konu:"Lambda",zorluk:"zor",soru:"S3 bucket'ına yüklenen fotoğrafların otomatik olarak yeniden boyutlandırılıp başka bir S3 bucket'ına aktarılması için hangi servis tetikleyici olarak kullanılmalıdır?",secenekler:{A:"EC2 Auto Scaling",B:"AWS Lambda",C:"Amazon CloudFront",D:"Elastic Load Balancer"},dogru:"B",aciklama:"Lambda fonksiyonu S3'e dosya yüklendiğinde tetiklenerek fotoğrafı resize edip başka bir S3'e aktarabilir.",cikma_ihtimali:90},
  {id:"2-67",video:"aws-2",konu:"Serverless",zorluk:"orta",soru:"Serverless kavramı ne anlama gelir?",secenekler:{A:"Hiçbir sunucu kullanılmadığı anlamına gelir",B:"Tüm altyapı ve sunucu yönetimi sorumluluğunun cloud provider'da olması anlamına gelir",C:"Yalnızca edge location'larda çalışan servisler anlamına gelir",D:"Yalnızca container'lar üzerinde çalışma anlamına gelir"},dogru:"B",aciklama:"Serverless bir sunucu olmadığı anlamına gelmez müşterinin sunucu yönetim sorumluluğu yoktur tüm sorumluluk cloud provider'dadır.",cikma_ihtimali:88},
  {id:"2-68",video:"aws-2",konu:"ECS",zorluk:"kolay",soru:"AWS'de Docker container'larını çalıştırmak için hangi servis kullanılır?",secenekler:{A:"Amazon EC2",B:"Amazon ECS",C:"Amazon S3",D:"Amazon RDS"},dogru:"B",aciklama:"ECS Elastic Container Service AWS'de Docker container'larını çalıştırmak için kullanılan servistir.",cikma_ihtimali:88},
  {id:"2-69",video:"aws-2",konu:"Fargate",zorluk:"orta",soru:"AWS Fargate'in görevi nedir?",secenekler:{A:"DNS yönetimi",B:"ECS ve EKS'nin yönetimi serverless container çalıştırma",C:"Veritabanı yedekleme",D:"Load balancing"},dogru:"B",aciklama:"Fargate ECS ve EKS container'larını serverless olarak yönetmek için kullanılır.",cikma_ihtimali:88},
  {id:"2-70",video:"aws-2",konu:"EKS",zorluk:"orta",soru:"AWS EKS hangi container orkestrasyon platformunu kullanır?",secenekler:{A:"Docker Swarm",B:"Kubernetes",C:"Apache Mesos",D:"Nomad"},dogru:"B",aciklama:"EKS Elastic Kubernetes Service Kubernetes platformunu kullanır ECS ise Docker'la çalışır.",cikma_ihtimali:85},
  {id:"2-71",video:"aws-2",konu:"Container vs EC2",zorluk:"orta",soru:"Container mimarisi ile EC2 hız açısından karşılaştırıldığında hangisi daha hızlı ayağa kalkar?",secenekler:{A:"EC2 saniyeler içinde container dakikalar içinde kalkar",B:"İkisi de aynı sürede kalkar",C:"Container saniyeler içinde EC2 1-2 dakikada kalkar",D:"Her ikisi de en az 10 dakika sürer"},dogru:"C",aciklama:"Container mimarisi saniyeler içinde ayağa kalkarken EC2 instance'ları 1-2 dakika sürer.",cikma_ihtimali:85},
  {id:"2-72",video:"aws-2",konu:"CI/CD",zorluk:"kolay",soru:"CI/CD kısaltmasının açılımı nedir?",secenekler:{A:"Cloud Integration / Cloud Deployment",B:"Continuous Integration / Continuous Delivery",C:"Container Integration / Container Development",D:"Centralized Infrastructure / Centralized Data"},dogru:"B",aciklama:"CI/CD Continuous Integration / Continuous Delivery yani Sürekli Entegrasyon / Sürekli Dağıtım anlamına gelir.",cikma_ihtimali:85},
  {id:"2-73",video:"aws-2",konu:"High Availability",zorluk:"orta",soru:"High Availability (yüksek erişilebilirlik) kavramı nasıl sağlanır?",secenekler:{A:"Tek bir AZ'de büyük bir sunucu kullanarak",B:"Birden fazla AZ'de kaynakları dağıtarak",C:"Yalnızca Edge Location kullanarak",D:"Yalnızca NAT Gateway kullanarak"},dogru:"B",aciklama:"High availability kaynakların birden fazla AZ'ye dağıtılmasıyla sağlanır.",cikma_ihtimali:88},
  {id:"2-76",video:"aws-2",konu:"Mimari Genel",zorluk:"zor",soru:"Bir web sayfasına kullanıcı bağlandığında sırasıyla hangi AWS servisleri devreye girer?",secenekler:{A:"EC2 → S3 → Route 53 → WAF",B:"Route 53 → WAF → CloudFront → EC2/S3",C:"CloudFront → Route 53 → Internet Gateway → Lambda",D:"WAF → NAT Gateway → VPC → RDS"},dogru:"B",aciklama:"Kullanıcı önce DNS Route 53 ile IP çözümler ardından WAF güvenlik kontrolü CloudFront CDN hizmeti ve nihayetinde EC2 veya S3'e ulaşır.",cikma_ihtimali:88},
  {id:"2-78",video:"aws-2",konu:"CloudFront",zorluk:"zor",soru:"CloudFront statik içerik için S3'e dinamik içerik için nereye yönlendirir?",secenekler:{A:"Route 53'e",B:"VPC içindeki EC2/uygulama sunucularına",C:"NAT Gateway'e",D:"Edge Location'a"},dogru:"B",aciklama:"CloudFront statik içerikleri S3'ten sunarken dinamik içerik talepleri için trafiği VPC içindeki uygulama sunucularına yönlendirir.",cikma_ihtimali:88},
  {id:"2-80",video:"aws-2",konu:"Latency",zorluk:"kolay",soru:"AWS'de Region seçiminde en önemli teknik kriter aşağıdakilerden hangisidir?",secenekler:{A:"Region'ın kuruluş tarihi",B:"Region'ın kullanıcılara yakınlığı (düşük latency)",C:"Region'daki servis sayısı",D:"Region'ın adı"},dogru:"B",aciklama:"Latency gecikme süresi çok önemlidir kullanıcılara en yakın Region seçilmesi düşük gecikme süresi sağlar.",cikma_ihtimali:82},
  {id:"2-81",video:"aws-2",konu:"Regulasyon",zorluk:"orta",soru:"Türkiye'de bazı kurumların verilerini yurt dışındaki cloud bölgelerinde tutamama sebebi nedir?",secenekler:{A:"AWS'in Türkiye'de Region'ı olmaması",B:"Veri egemenliği ile ilgili yasal düzenlemeler regulasyon",C:"Teknik altyapı yetersizliği",D:"Maliyet faktörleri"},dogru:"B",aciklama:"Devlet kurumları ve finans kuruluşları gibi bazı sektörlerde regulasyon gereği veriler yurt dışında tutulamaz.",cikma_ihtimali:75},
  {id:"2-82",video:"aws-2",konu:"Load Balancer",zorluk:"zor",soru:"Ani trafik artışında Application Load Balancer ve Auto Scaling birlikte nasıl çalışır?",secenekler:{A:"ALB trafiği reddeder Auto Scaling devreye girmez",B:"ALB gelen yükü mevcut ve yeni oluşturulan makinelere dağıtır Auto Scaling ihtiyaç kadar yeni makine ayağa kaldırır",C:"Auto Scaling yeni makine kaldırır ALB yalnızca eski makinelere trafik gönderir",D:"ALB trafiği CloudFront'a yönlendirir Auto Scaling çalışmaz"},dogru:"B",aciklama:"Trafik arttığında Auto Scaling yeni makineler kaldırır ve ALB gelen yükü tüm makinelere dengeli şekilde dağıtır.",cikma_ihtimali:88},
  {id:"2-83",video:"aws-2",konu:"ElastiCache",zorluk:"kolay",soru:"AWS mimarisinde ElastiCache hangi amaçla kullanılır?",secenekler:{A:"Dosya depolama",B:"Veritabanı önbellekleme (caching)",C:"DNS çözümleme",D:"Container yönetimi"},dogru:"B",aciklama:"ElastiCache veritabanı tarafında önbellekleme yaparak sorgu performansını artırır.",cikma_ihtimali:85},

  /* ════════════════ aws-1 ════════════════ */
  {id:"1-4",video:"aws-1",konu:"On-Premise",zorluk:"orta",soru:"Geleneksel on-premise sistemde yeni bir sunucu hazırlığı yaklaşık olarak ne kadar sürebiliyordu?",secenekler:{A:"Birkaç saat",B:"1 gün",C:"Toplamda 3 aya yakın",D:"1 yıldan fazla"},dogru:"C",aciklama:"Sipariş gelme kurulum ve işletim sistemi yükleme dahil toplamda 3 aya yakın süre geçiyordu.",cikma_ihtimali:70},
  {id:"1-5",video:"aws-1",konu:"Sanallaştırma",zorluk:"orta",soru:"Geleneksel tek makine kullanımının yarattığı temel problem neydi ve sanallaştırma bunu nasıl çözdü?",secenekler:{A:"Makineler çok hızlıydı sanallaştırma yavaşlattı",B:"Makineler boşa kaynak yakıyordu sanallaştırma atıl alanların kullanılmasını sağladı",C:"Makineler internete bağlanamıyordu sanallaştırma bağlantı sağladı",D:"Makinelerin işletim sistemi yoktu sanallaştırma OS getirdi"},dogru:"B",aciklama:"Tek makine başına tek uygulamada boşa kalan kaynakların boşa kullanıldığını sanallaştırmanın atıl alanları değerlendirdiğini anlatıyor.",cikma_ihtimali:82},
  {id:"1-6",video:"aws-1",konu:"Sanallaştırma",zorluk:"orta",soru:"Sanallaştırma katmanına verilen isim aşağıdakilerden hangisidir?",secenekler:{A:"Container Engine",B:"Hypervisor",C:"Load Balancer",D:"Edge Location"},dogru:"B",aciklama:"Sanallaştırma katmanına hypervisor denir.",cikma_ihtimali:80},
  {id:"1-7",video:"aws-1",konu:"IaaS",zorluk:"orta",soru:"IaaS (Infrastructure as a Service) modelinde servis sağlayıcı genellikle hangi katmanları sağlar?",secenekler:{A:"Yalnızca uygulama",B:"Network storage server ve sanallaştırma",C:"Tüm katmanlar uygulama dahil",D:"Sadece veri ve güvenlik"},dogru:"B",aciklama:"IaaS'da network storage server ve sanallaştırmanın provider tarafından sağlandığı OS uygulama ve verinin müşteride kaldığı anlatılıyor.",cikma_ihtimali:85},
  {id:"1-8",video:"aws-1",konu:"PaaS / SaaS",zorluk:"kolay",soru:"SaaS aşağıdakilerden hangisinin kısaltmasıdır?",secenekler:{A:"System as a Service",B:"Storage as a Service",C:"Software as a Service",D:"Security as a Service"},dogru:"C",aciklama:"SaaS Software as a Service'in kısaltmasıdır.",cikma_ihtimali:82},
  {id:"1-10",video:"aws-1",konu:"DevOps",zorluk:"kolay",soru:"DevOps terimi hangi iki kavramın birleşiminden oluşur?",secenekler:{A:"Development + Operations",B:"Device + Operations",C:"Development + Optimization",D:"Deploy + Options"},dogru:"A",aciklama:"DevOps Development dev ve Operations ops kelimelerinin birleşimidir.",cikma_ihtimali:85},
  {id:"1-11",video:"aws-1",konu:"CI/CD",zorluk:"kolay",soru:"CI/CD süreci hangi kavramların kısaltmasıdır?",secenekler:{A:"Code Integration / Code Delivery",B:"Continuous Integration / Continuous Delivery",C:"Cloud Integration / Cloud Deployment",D:"Container Integration / Container Deployment"},dogru:"B",aciklama:"CI/CD Continuous Integration sürekli entegrasyon ve Continuous Delivery sürekli dağıtım olarak açıklanır.",cikma_ihtimali:85},
  {id:"1-12",video:"aws-1",konu:"Mikroservis Mimarisi",zorluk:"orta",soru:"Bir e-ticaret sitesinde sipariş modülünde sorun çıktığında monolitik mimari ile mikroservis mimarisi arasındaki fark nedir?",secenekler:{A:"Her ikisinde de sadece order servisi güncellenir",B:"Monolitikte tüm yazılım çekilip güncellenir mikroservisde sadece order servisi bakıma alınır diğerleri çalışır",C:"Mikroserviste tüm sistem durdurulur monolitikte hiçbir şey değişmez",D:"Her iki mimaride de sistemin durmasına gerek yoktur"},dogru:"B",aciklama:"Monolitikte tüm yazılımın çekilip güncellendiği mikroservisde sadece ilgili servisin bakıma alınıp diğerlerinin çalışmaya devam ettiği anlatılıyor.",cikma_ihtimali:88},
  {id:"1-13",video:"aws-1",konu:"API Gateway",zorluk:"orta",soru:"Mikroservis mimarisinde servislerin birbiriyle haberleşmesini sağlayan yapıya ne ad verilir?",secenekler:{A:"Load Balancer",B:"API Gateway",C:"CloudFront",D:"Route 53"},dogru:"B",aciklama:"Mikroservislerin birbiriyle haberleşmesi için API Gateway adlı yapının kullanıldığı anlatılıyor.",cikma_ihtimali:85},
  {id:"1-14",video:"aws-1",konu:"Container",zorluk:"orta",soru:"Container mimarisi sanallaştırmaya göre hangi avantajı sağlar?",secenekler:{A:"Gigabyte düzeyinde daha büyük boyutlarla çalışır",B:"Saniyeler içinde ayağa kalkar megabyte boyutlarında kurulabilir OS seviyesinde izoledir",C:"Daha yavaş başlatılır ama daha güvenlidir",D:"Sadece tek tip işletim sistemi destekler"},dogru:"B",aciklama:"Container'ların saniyeler içinde ayağa kalktığı MB boyutlarında olduğu ve OS seviyesinde izole olduğu belirtiliyor.",cikma_ihtimali:85},
  {id:"1-17",video:"aws-1",konu:"Bulut Fiyatlandırma",zorluk:"orta",soru:"Pay as you go modeli ne anlama gelir?",secenekler:{A:"Yıllık sabit ücret ödeme",B:"Kullandığın kadar öde modeli",C:"Önceden ödeme yapıp daha sonra kullanma",D:"Ücretsiz kullanım modeli"},dogru:"B",aciklama:"Pay as you go kavramı kullandığın kadar öde modeli olarak açıklanmıştır.",cikma_ihtimali:85},
  {id:"1-19",video:"aws-1",konu:"Availability Zone",zorluk:"orta",soru:"Bir AWS region'ında minimum kaç tane Availability Zone bulunur ve birbirlerinden uzaklıkları nedir?",secenekler:{A:"2 AZ 50 km uzaklıkta",B:"3 AZ 100 km uzaklıkta",C:"4 AZ 200 km uzaklıkta",D:"1 AZ uzaklık yok"},dogru:"B",aciklama:"Her region'da en az 3 AZ olduğu ve birbirlerinden 100 km uzaklıkta konumlandıkları söyleniyor.",cikma_ihtimali:88},
  {id:"1-20",video:"aws-1",konu:"Availability Zone",zorluk:"kolay",soru:"AZ ne anlama gelir ve neyi temsil eder?",secenekler:{A:"Access Zone - erişim bölgesi",B:"Availability Zone - bir Data Center",C:"Application Zone - uygulama bölgesi",D:"Auto Zone - otomatik bölge"},dogru:"B",aciklama:"AZ Availability Zone'un kısaltmasıdır ve bir Data Center olarak düşünülebilir.",cikma_ihtimali:85},
  {id:"1-23",video:"aws-1",konu:"S3",zorluk:"kolay",soru:"S3 isminin kökeni ve açılımı nedir?",secenekler:{A:"Storage Service Standard - 3 versiyon",B:"Simple Storage Service - 3 S harfinden",C:"Server Storage System - 3 sunucu",D:"Static Storage Service - 3. nesil"},dogru:"B",aciklama:"S3 Simple Storage Service olup baş harfleri 3 S'ten oluştuğu için S3 olarak adlandırılır.",cikma_ihtimali:85},
  {id:"1-24",video:"aws-1",konu:"S3",zorluk:"orta",soru:"S3 servisinde genellikle ne tür veriler tutulur?",secenekler:{A:"Sürekli değişen dinamik veriler",B:"Statik (durağan) veriler",C:"Veritabanı işlem logları",D:"Sanal makine snapshot'ları"},dogru:"B",aciklama:"S3 statik durağan verilerin tutulduğu yerdir.",cikma_ihtimali:82},
  {id:"1-25",video:"aws-1",konu:"EC2",zorluk:"kolay",soru:"EC2 isminin açılımı ve anlamı nedir?",secenekler:{A:"Elastic Container Cloud - container servisi",B:"Elastic Compute Cloud - sanal makine servisi",C:"Easy Cloud Computing - kolay bulut",D:"Enterprise Cloud Cluster - kurumsal küme"},dogru:"B",aciklama:"EC2 Elastic Compute Cloud'un kısaltmasıdır ve AWS'in sanal makine servisidir.",cikma_ihtimali:88},
  {id:"1-26",video:"aws-1",konu:"Route 53",zorluk:"orta",soru:"AWS DNS servisinin adının Route 53 olmasının sebebi nedir?",secenekler:{A:"53 farklı domain desteklediği için",B:"53. sürüm olduğu için",C:"DNS protokolünün 53. portu kullanması nedeniyle",D:"1953 yılında geliştirildiği için"},dogru:"C",aciklama:"DNS server'larının 53. portu kullandığı için servisin adının Route 53 olduğu belirtiliyor.",cikma_ihtimali:85},
  {id:"1-27",video:"aws-1",konu:"Route 53",zorluk:"kolay",soru:"Route 53 hangi tür AWS servisidir?",secenekler:{A:"Sanal makine servisi",B:"Yük dengeleyici servisi",C:"DNS servisi",D:"Storage servisi"},dogru:"C",aciklama:"Route 53 AWS'in DNS Domain Name System servisidir.",cikma_ihtimali:85},
  {id:"1-29",video:"aws-1",konu:"CloudFront / CDN",zorluk:"orta",soru:"CDN'in açılımı ve karşılığı olan AWS servisi hangisidir?",secenekler:{A:"Cloud Data Network - S3",B:"Content Delivery Network - CloudFront",C:"Central Data Node - Route 53",D:"Compute Distribution Network - EC2"},dogru:"B",aciklama:"CDN Content Delivery Network olup AWS'teki karşılığı CloudFront servisidir.",cikma_ihtimali:88},
  {id:"1-30",video:"aws-1",konu:"Edge Location",zorluk:"orta",soru:"Edge Location'dan ilk kez içerik çekildikten sonra sonraki kullanıcılar nasıl daha hızlı erişir?",secenekler:{A:"Her kullanıcı her seferinde aynı uzun yolu kat eder",B:"İlk erişimde içerik en yakın Edge Location'a cache'lenir sonraki kullanıcılar oradan çeker",C:"İçerik sadece o ülkenin EC2'sinde tutulur",D:"Sadece VIP kullanıcılar erişebilir"},dogru:"B",aciklama:"İlk erişimde içeriğin Edge Location'a cache'lendiği ve sonraki kullanıcıların oradan hızlıca eriştiği anlatılıyor.",cikma_ihtimali:85},
  {id:"1-31",video:"aws-1",konu:"Edge Location",zorluk:"orta",soru:"Edge Location nedir?",secenekler:{A:"AWS'in en büyük data center'ı",B:"Bir region içindeki ana AZ",C:"Kullanıcıya en yakın noktada içerik cache'leyen ve sunan küçük dağıtım noktası",D:"Yük dengeleme için kullanılan sunucu"},dogru:"C",aciklama:"Edge Location küçük bir DC gibi en yakın noktada cache'lenmiş içeriğe erişim sağlayan lokasyondur.",cikma_ihtimali:85},
  {id:"1-32",video:"aws-1",konu:"Load Balancer",zorluk:"kolay",soru:"Load Balancer'ın temel görevi nedir?",secenekler:{A:"Veri tabanı yedeklemek",B:"Sunucu yükünü dağıtmak / yük dengelemek",C:"Statik içerik depolamak",D:"DNS sorgularını cevaplamak"},dogru:"B",aciklama:"Load Balancer sunucu yükünü dağıtmak için kullanılır.",cikma_ihtimali:85},
  {id:"1-34",video:"aws-1",konu:"Load Balancer",zorluk:"kolay",soru:"AWS yük dengeleyici servisinin kısaltması nedir?",secenekler:{A:"WAF",B:"ELB (Elastic Load Balancer)",C:"ECS",D:"EBS"},dogru:"B",aciklama:"Yük dengeleyici servisinin adı Elastic Load Balancer ELB'dir.",cikma_ihtimali:82},
  {id:"1-36",video:"aws-1",konu:"AWS Mimarisi",zorluk:"zor",soru:"Statik veri değil de web sayfası gibi dinamik içerik isteğinde trafik nereye yönlendirilir?",secenekler:{A:"Direk S3'e",B:"Internet Gateway üzerinden Load Balancer'a ve oradan EC2'ye",C:"Sadece Edge Location'a",D:"Sadece Route 53'e"},dogru:"B",aciklama:"Dinamik trafikte istek Internet Gateway'e oradan Load Balancer'a ve EC2'ye yönlendirilir.",cikma_ihtimali:85},
  {id:"1-38",video:"aws-1",konu:"Region",zorluk:"kolay",soru:"Region kavramı en doğru nasıl tanımlanır?",secenekler:{A:"Tek bir sunucu",B:"AZ'lerin bulunduğu ülke ya da şehir adı / coğrafi bölge",C:"Cache lokasyonu",D:"Yazılım katmanı"},dogru:"B",aciklama:"Region AZ'lerin bulunduğu ülke veya şehir bölgesi olarak tanımlanır.",cikma_ihtimali:82},
  {id:"1-46",video:"aws-1",konu:"DNS",zorluk:"orta",soru:"Bir kullanıcı alan adı yazdığında DNS sistemi ne yapar?",secenekler:{A:"Domain ismini olduğu gibi makineye iletir",B:"Bu alfanumerik adresi IP adresine çevirir çünkü makineler IP adreslerini anlar",C:"Sadece firewall'dan geçirir",D:"Domain'i Load Balancer'a yönlendirir"},dogru:"B",aciklama:"Makinelerin harfleri anlamadığı DNS'in domain ismini IP adresine dönüştürdüğü açıklanıyor.",cikma_ihtimali:85},
  {id:"1-47",video:"aws-1",konu:"Sanallaştırma vs Container",zorluk:"orta",soru:"Sanallaştırma ile container arasındaki donanım paylaşımı farkı nedir?",secenekler:{A:"Sanallaştırmada paylaşılır container'da bölünür",B:"Sanallaştırmada bölünür container'da paylaşılır",C:"İkisinde de bölünür",D:"İkisinde de paylaşılır"},dogru:"B",aciklama:"Sanallaştırmada donanım kaynaklarının bölündüğü container'da ise ana donanım kaynaklarının paylaşıldığı söyleniyor.",cikma_ihtimali:82},
  {id:"1-49",video:"aws-1",konu:"Mimari Akış",zorluk:"zor",soru:"Aşağıdaki mimari akışlardan hangisi tam olarak doğrudur?",secenekler:{A:"Kullanıcı → Route 53 → WAF → CloudFront (statik için) → S3",B:"Kullanıcı → S3 → Route 53 → Internet Gateway",C:"Kullanıcı → CloudFront → DNS → EC2 → S3",D:"Kullanıcı → Load Balancer → Route 53 → WAF"},dogru:"A",aciklama:"Doğru akış kullanıcı önce Route 53 DNS sonra WAF firewall sonra CloudFront oradan da S3 olarak ilerler.",cikma_ihtimali:88},
  {id:"1-50",video:"aws-1",konu:"Cookie / Session",zorluk:"orta",soru:"Aynı load balancer'a bağlı farklı bir sunucuya geçildiğinde kullanıcı oturum bilgileri ne olur?",secenekler:{A:"Tamamen kaybolur",B:"Cookie sistemi sayesinde oturum/seçim bilgileri korunur",C:"Sadece yöneticiler için saklanır",D:"Veritabanına manuel kaydedilmesi gerekir"},dogru:"B",aciklama:"Load Balancer'ın cookie sistemiyle çalıştığı ve alt header'lar arasında geçişlerde bu cookie'lerin oturum bilgilerini koruduğu açıklanıyor.",cikma_ihtimali:78},
  {id:"1-53",video:"aws-1",konu:"Sanallaştırma",zorluk:"orta",soru:"Sanal makinelerin yapısı container'la kıyaslandığında temel bir fark nedir?",secenekler:{A:"VM'ler tek OS'ta çalışır container birden çok OS gerektirir",B:"VM'lerde her sanal makine kendi OS'unu çalıştırır container'lar tek bir OS üzerinde container engine ile çalışır",C:"Container'lar daha büyük disk alanı ister",D:"VM'ler tek başına dağıtılamaz"},dogru:"B",aciklama:"VM mimarisinde her VM'in kendi OS'una sahip olduğu container'ların ise tek bir OS üzerinde container engine ile çalıştığı anlatılıyor.",cikma_ihtimali:82},
  {id:"1-57",video:"aws-1",konu:"Bulut Geçiş",zorluk:"orta",soru:"On-premise sistemlerde tüm sorumluluğun müşteride olmasıyla karşılaştırıldığında IaaS modelinde müşteride kalan katmanlar hangileridir?",secenekler:{A:"Network ve storage",B:"Server ve sanallaştırma",C:"İşletim sistemi uygulama data ve bazı güvenlik konuları",D:"Hiçbiri her şey provider'da"},dogru:"C",aciklama:"IaaS'da OS uygulama data ve bazı güvenlik tarafının müşteride kaldığı belirtiliyor.",cikma_ihtimali:80},
  {id:"1-58",video:"aws-1",konu:"Container vs VM",zorluk:"orta",soru:"Container'ların VM'ye göre dağıtım kolaylığı avantajı nedir?",secenekler:{A:"Sadece tek bir ortamda çalışırlar",B:"Farklı ortamlarda çalışma sorunu olmaz her ortamda çalışır",C:"Sadece AWS üzerinde çalışırlar",D:"Sadece Linux'ta çalışırlar"},dogru:"B",aciklama:"Container teknolojisinin farklı ortamlarda çalışma sorununu çözdüğü her ortamda çalıştığı söyleniyor.",cikma_ihtimali:82},
  {id:"1-59",video:"aws-1",konu:"S3 ve CloudFront",zorluk:"zor",soru:"Hollanda'daki ilk kullanıcı web sayfasına eriştiğinde sonradan gelen kullanıcılar aynı statik içeriğe nasıl daha hızlı erişir?",secenekler:{A:"S3'ten tekrar Türkiye'ye gidip içeriği indirirler",B:"CloudFront ile içerik en yakın Edge Location'da cache'lendiği için doğrudan oradan alırlar",C:"Route 53 farklı IP atadığı için",D:"Load Balancer onları doğrudan içerik için EC2'ye yönlendirir"},dogru:"B",aciklama:"CloudFront'un statik içeriği en yakın Edge Location'a cache'lediği ve sonraki kullanıcıların oradan hızla aldığı açıklanıyor.",cikma_ihtimali:85},
  {id:"1-60",video:"aws-1",konu:"AZ Sayısı",zorluk:"kolay",soru:"AWS'de region başına genellikle kaç AZ bulunur?",secenekler:{A:"Genellikle 1",B:"Genellikle 2",C:"Genellikle 3 bazılarında 4-6",D:"Her zaman tam olarak 10"},dogru:"C",aciklama:"Minimum 3 bazı bölgelerde 4-6 AZ olabileceği söyleniyor.",cikma_ihtimali:82},
  {id:"1-61",video:"aws-1",konu:"Sanallaştırma Geçmişi",zorluk:"orta",soru:"Sanallaştırmadan önce şirketlerin her uygulama için ayrı bir makine kullanması neyle sonuçlanıyordu?",secenekler:{A:"Makinelerin %100'ünün dolu olması",B:"Boşa kaynak kullanımı örn. 100 GB'tan sadece 10 GB kullanılması",C:"Daha hızlı performans",D:"Sıfır maliyet"},dogru:"B",aciklama:"Her uygulama için ayrı makine kullanmanın boşa kaynak yakılmasına yol açtığı anlatılıyor.",cikma_ihtimali:80},
  {id:"1-65",video:"aws-1",konu:"Servis Tipleri Sıralama",zorluk:"orta",soru:"Sorumluluk açısından sıralandığında müşterinin en az sorumluluk aldığı model hangisidir?",secenekler:{A:"On-Premise",B:"IaaS",C:"PaaS",D:"SaaS"},dogru:"D",aciklama:"SaaS modelinde müşteri yalnızca yazılımı kullanır altyapı platform ve uygulama dahil her şey provider tarafından sağlanır.",cikma_ihtimali:85}
];

/* ─── STATE ─────────────────────────────────────────────────── */
const STATE = {
  filter: 'all',
  search: '',
  topic: null,
  page: 1,
  filtered: []
};

/* ─── LOCALSTORAGE HELPERS ──────────────────────────────────── */
function lsGet(key, def) {
  try { const v = localStorage.getItem(key); return v ? JSON.parse(v) : def; }
  catch { return def; }
}
function lsSet(key, val) {
  try { localStorage.setItem(key, JSON.stringify(val)); } catch {}
}

let answers   = lsGet('aws_answers', {});
let favorites = lsGet('aws_favorites', {});
let wrongIds  = lsGet('aws_wrong', {});

function saveAnswers()   { lsSet('aws_answers', answers); }
function saveFavorites() { lsSet('aws_favorites', favorites); }
function saveWrong()     { lsSet('aws_wrong', wrongIds); }

/* ─── VERİ HAZIRLIĞI ────────────────────────────────────────── */
function sanitize(q) {
  return {
    id:             String(q.id    ?? Math.random()),
    video:          String(q.video ?? 'unknown'),
    konu:           String(q.konu  ?? 'Genel'),
    zorluk:         String(q.zorluk ?? 'orta'),
    soru:           String(q.soru   ?? ''),
    secenekler:     q.secenekler && typeof q.secenekler === 'object' ? q.secenekler : {A:'',B:'',C:'',D:''},
    dogru:          String(q.dogru  ?? 'A'),
    aciklama:       String(q.aciklama ?? ''),
    cikma_ihtimali: Number(q.cikma_ihtimali ?? 50),
    oncelik:        String(q.oncelik ?? 'orta')
  };
}

const QUESTIONS = RAW_DATA.map(sanitize);

/* ─── FİLTRELEME ────────────────────────────────────────────── */
function getFiltered() {
  let list = [...QUESTIONS];

  switch (STATE.filter) {
    case 'critical':  list = list.filter(q => q.cikma_ihtimali >= 90); break;
    case 'final':     list = list.filter(q => q.cikma_ihtimali >= 70); break;
    case 'last2hours':list = list.filter(q => q.cikma_ihtimali >= 90); break;
    case 'wrong':     list = list.filter(q => wrongIds[q.id]);   break;
    case 'fav':       list = list.filter(q => favorites[q.id]);  break;
    case 'topic':
      if (STATE.topic) list = list.filter(q => q.konu === STATE.topic);
      break;
    default: break;
  }

  if (STATE.search.trim()) {
    const s = STATE.search.toLowerCase().trim();
    list = list.filter(q =>
      q.soru.toLowerCase().includes(s) ||
      q.konu.toLowerCase().includes(s) ||
      q.aciklama.toLowerCase().includes(s)
    );
  }

  return list;
}

/* ─── KONU LİSTESİ ──────────────────────────────────────────── */
function getTopics() {
  const map = {};
  QUESTIONS.forEach(q => {
    if (!map[q.konu]) map[q.konu] = 0;
    map[q.konu]++;
  });
  return map;
}

/* ─── İSTATİSTİKLER ─────────────────────────────────────────── */
function getStats() {
  let correct = 0, wrong = 0;
  QUESTIONS.forEach(q => {
    if (answers[q.id] !== undefined) {
      if (answers[q.id] === q.dogru) correct++;
      else wrong++;
    }
  });
  const answered = correct + wrong;
  const rate = answered > 0 ? Math.round((correct / answered) * 100) : 0;
  const fav  = Object.keys(favorites).filter(k => favorites[k]).length;
  return { total: QUESTIONS.length, answered, correct, wrong, rate, fav };
}

/* ─── HEADER GÜNCELLE ───────────────────────────────────────── */
function updateStats() {
  const s = getStats();
  document.getElementById('statTotal').textContent   = s.answered;
  document.getElementById('statCorrect').textContent = s.correct;
  document.getElementById('statWrong').textContent   = s.wrong;
  document.getElementById('statFav').textContent     = s.fav;
  document.getElementById('statRate').textContent    = s.rate + '%';
  const fill = s.total > 0 ? (s.answered / s.total) * 100 : 0;
  document.getElementById('progressBar').style.width = fill + '%';
}

/* ─── NAV SAYAÇLARI ─────────────────────────────────────────── */
function updateCounts() {
  document.getElementById('countAll').textContent      = QUESTIONS.length;
  document.getElementById('countCritical').textContent = QUESTIONS.filter(q => q.cikma_ihtimali >= 90).length;
  document.getElementById('countFinal').textContent    = QUESTIONS.filter(q => q.cikma_ihtimali >= 70).length;
  document.getElementById('countLast').textContent     = QUESTIONS.filter(q => q.cikma_ihtimali >= 90).length;
  document.getElementById('countWrong').textContent    = QUESTIONS.filter(q => wrongIds[q.id]).length;
  document.getElementById('countFav').textContent      = QUESTIONS.filter(q => favorites[q.id]).length;
}

/* ─── TOPIC NAV ─────────────────────────────────────────────── */
function renderTopicNav() {
  const topics    = getTopics();
  const container = document.getElementById('topicList');
  container.innerHTML = '';

  Object.entries(topics)
    .sort((a, b) => b[1] - a[1])
    .forEach(([topic, count]) => {
      const btn = document.createElement('button');
      btn.className = 'nav-btn' + (STATE.filter === 'topic' && STATE.topic === topic ? ' active' : '');
      btn.dataset.filter = 'topic';
      btn.dataset.topic  = topic;
      btn.innerHTML = `
        <span class="nav-icon">📂</span>
        <span class="nav-label">${topic}</span>
        <span class="nav-count">${count}</span>`;
      
      btn.addEventListener('click', () => {
        STATE.filter = 'topic';
        STATE.topic  = topic;
        STATE.page   = 1;
        updateActiveNav();
        renderAll();
        if (window.innerWidth <= 900) {
          document.getElementById('sidebar').classList.remove('open');
          document.getElementById('sidebarOverlay').classList.remove('active');
        }
      });
      container.appendChild(btn);
    });
}

/* ─── AKTİF NAV ─────────────────────────────────────────────── */
function updateActiveNav() {
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.classList.remove('active');
    
    if (btn.dataset.mode === STATE.filter) {
      btn.classList.add('active');
    }
    else if (btn.dataset.filter === 'topic' && STATE.filter === 'topic' && btn.dataset.topic === STATE.topic) {
      btn.classList.add('active');
    }
  });
}

/* ─── MODE BANNER ───────────────────────────────────────────── */
const MODE_INFO = {
  all:        { icon:'📚', title:'Tüm Sorular',  desc:'Tüm soru havuzundan çalışıyorsunuz' },
  critical:   { icon:'🔥', title:'En Kritik',    desc:'Çıkma ihtimali ≥90 olan sorular' },
  final:      { icon:'🎯', title:'Final Modu',   desc:'Çıkma ihtimali ≥70 olan sorular' },
  last2hours: { icon:'🚀', title:'Son 2 Saat',   desc:'En kritik sorular — sınava girerken çalış!' },
  wrong:      { icon:'❌', title:'Yanlışlarım',  desc:'Yanlış cevapladığın sorular' },
  fav:        { icon:'⭐', title:'Favorilerim',  desc:'Favori olarak işaretlediğin sorular' },
  topic:      { icon:'📂', title:'Konu Filtresi',desc:'' }
};

function updateBanner(count) {
  const info  = MODE_INFO[STATE.filter] || MODE_INFO.all;
  const title = STATE.filter === 'topic' ? (STATE.topic || 'Konu') : info.title;
  const desc  = STATE.filter === 'topic' ? `"${STATE.topic}" konusundaki sorular` : info.desc;
  document.getElementById('bannerIcon').textContent  = info.icon;
  document.getElementById('bannerTitle').textContent = title;
  document.getElementById('bannerDesc').textContent  = desc;
  document.getElementById('bannerCount').textContent = STATE.page + ' / ' + count;
}

/* ─── YARDIMCI ──────────────────────────────────────────────── */
function priorityClass(p) {
  if (p >= 90) return 'priority-critical';
  if (p >= 75) return 'priority-high';
  if (p >= 60) return 'priority-medium';
  return 'priority-low';
}

function probBadgeClass(p) {
  if (p >= 90) return 'prob-critical';
  if (p >= 75) return 'prob-high';
  return '';
}

/* ─── KART HTML ─────────────────────────────────────────────── */
function buildCard(q, idx) {
  const answered   = answers[q.id] !== undefined;
  const isCorrect  = answered && answers[q.id] === q.dogru;
  const isFav      = !!favorites[q.id];
  const userAnswer = answers[q.id];

  let cardClass = priorityClass(q.cikma_ihtimali);
  if (answered) cardClass += isCorrect ? ' answered-correct' : ' answered-wrong';

  const opts = Object.entries(q.secenekler).map(([key, val]) => {
    let cls = 'option-btn';
    if (answered) {
      if (key === q.dogru) cls += ' correct';
      if (key === userAnswer && userAnswer !== q.dogru) cls += ' wrong';
    }
    return `
      <button class="${cls}" data-qid="${q.id}" data-key="${key}" ${answered ? 'disabled' : ''}>
        <span class="option-key">${key}</span>
        <span class="option-val">${val}</span>
      </button>`;
  }).join('');

  const explShow  = answered ? 'show' : '';
  const explTheme = answered ? (isCorrect ? 'correct' : 'wrong') : '';
  const explIcon  = isCorrect ? '✅' : (answered ? '❌' : '💡');

  return `
    <article class="q-card ${cardClass}" id="card-${q.id}" data-id="${q.id}">
      <div class="card-header">
        <div class="card-meta">
          <span class="badge-topic">${q.konu}</span>
          <span class="badge-difficulty ${q.zorluk}">${q.zorluk}</span>
          <span class="badge-prob ${probBadgeClass(q.cikma_ihtimali)}">%${q.cikma_ihtimali} Çıkar</span>
        </div>
        <div class="card-actions">
          <button class="btn-fav" data-qid="${q.id}" title="Favorilere Ekle/Çıkar">
            ${isFav ? '⭐' : '☆'}
          </button>
          <span class="card-num">#${idx + 1}</span>
        </div>
      </div>
      
      <div class="card-body">
        <h3 class="question-text">${q.soru}</h3>
        <div class="options-list">
          ${opts}
        </div>
        <div class="explanation-box ${explShow} ${explTheme}" id="expl-${q.id}">
          <span class="explanation-icon">${explIcon}</span>
          <span class="explanation-text">${q.aciklama}</span>
        </div>
      </div>
      
      <div class="card-footer">
        <button class="btn-show-answer" data-qid="${q.id}">
          ${answered ? 'Açıklamayı Gizle/Göster' : 'Cevabı Göster'}
        </button>
        <span class="source-label">Kaynak: ${q.video}</span>
      </div>
    </article>
  `;
}

/* ─── KART OLAYLARI ─────────────────────────────────────────── */
function attachCardEvents() {
  /* Seçenek tıklama */
  document.querySelectorAll('.option-btn:not([disabled])').forEach(btn => {
    btn.addEventListener('click', function () {
      const qid = this.dataset.qid;
      const key = this.dataset.key;
      const q   = QUESTIONS.find(x => x.id === qid);
      if (!q || answers[qid] !== undefined) return;

      answers[qid] = key;
      if (key !== q.dogru) wrongIds[qid] = true;
      else delete wrongIds[qid];
      saveAnswers();
      saveWrong();

      const cardEl = document.getElementById(`card-${qid}`);
      if (cardEl) {
        const idx    = STATE.filtered.findIndex(x => x.id === qid);
        const tmp    = document.createElement('div');
        tmp.innerHTML = buildCard(q, idx);
        const newCard = tmp.firstElementChild;
        cardEl.replaceWith(newCard);
        attachSingleCard(newCard);
      }

      updateStats();
      updateCounts();
      showToast(key === q.dogru ? '✅ Doğru!' : `❌ Yanlış! Doğru cevap: ${q.dogru}`);
    });
  });

  /* Favori */
  document.querySelectorAll('.btn-fav').forEach(btn => {
    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      const qid = this.dataset.qid;
      if (favorites[qid]) delete favorites[qid];
      else favorites[qid] = true;
      saveFavorites();
      this.textContent = favorites[qid] ? '⭐' : '☆';
      this.title       = favorites[qid] ? 'Favoriden çıkar' : 'Favoriye ekle';
      updateStats();
      updateCounts();
      showToast(favorites[qid] ? '⭐ Favorilere eklendi' : '☆ Favorilerden çıkarıldı');
    });
  });

  /* Cevabı Göster */
  document.querySelectorAll('.btn-show-answer').forEach(btn => {
    btn.addEventListener('click', function () {
      const expl = document.getElementById(`expl-${this.dataset.qid}`);
      if (!expl) return;
      const showing = expl.classList.contains('show');
      expl.classList.toggle('show', !showing);
      if (!showing && !expl.classList.contains('correct') && !expl.classList.contains('wrong')) {
        expl.classList.add('correct');
      }
      this.textContent = showing ? 'Cevabı Göster' : 'Açıklamayı Gizle/Göster';
    });
  });
}

function attachSingleCard(cardEl) {
  const optBtns = cardEl.querySelectorAll('.option-btn:not([disabled])');
  optBtns.forEach(btn => {
    btn.addEventListener('click', function () {
      const qid = this.dataset.qid;
      const key = this.dataset.key;
      const q   = QUESTIONS.find(x => x.id === qid);
      if (!q || answers[qid] !== undefined) return;

      answers[qid] = key;
      if (key !== q.dogru) wrongIds[qid] = true;
      else delete wrongIds[qid];
      saveAnswers();
      saveWrong();

      const idx  = STATE.filtered.findIndex(x => x.id === qid);
      const tmp  = document.createElement('div');
      tmp.innerHTML = buildCard(q, idx);
      const newCard = tmp.firstElementChild;
      cardEl.replaceWith(newCard);
      attachSingleCard(newCard);

      updateStats();
      updateCounts();
      showToast(key === q.dogru ? '✅ Doğru!' : `❌ Yanlış! Doğru cevap: ${q.dogru}`);
    });
  });

  const favBtn = cardEl.querySelector('.btn-fav');
  if (favBtn) {
    favBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      const qid = this.dataset.qid;
      if (favorites[qid]) delete favorites[qid];
      else favorites[qid] = true;
      saveFavorites();
      this.textContent = favorites[qid] ? '⭐' : '☆';
      updateStats();
      updateCounts();
      showToast(favorites[qid] ? '⭐ Favorilere eklendi' : '☆ Favorilerden çıkarıldı');
    });
  }

  const showBtn = cardEl.querySelector('.btn-show-answer');
  if (showBtn) {
    showBtn.addEventListener('click', function () {
      const expl = document.getElementById(`expl-${this.dataset.qid}`);
      if (!expl) return;
      const showing = expl.classList.contains('show');
      expl.classList.toggle('show', !showing);
      if (!showing && !expl.classList.contains('correct') && !expl.classList.contains('wrong')) {
        expl.classList.add('correct');
      }
      this.textContent = showing ? 'Cevabı Göster' : 'Açıklamayı Gizle/Göster';
    });
  }
}

/* ─── ANA RENDER (TEK SORU MODU) ────────────────────────────── */
function renderAll() {
  STATE.filtered  = getFiltered();
  const total     = STATE.filtered.length;

  // Sayfa sınırlarını koru
  if (STATE.page > total && total > 0) STATE.page = total;
  if (STATE.page < 1) STATE.page = 1;

  // SADECE aktif sayfadaki 1 soruyu al
  const slice     = STATE.filtered.slice(STATE.page - 1, STATE.page);
  
  const area      = document.getElementById('cardArea');
  const emptyEl   = document.getElementById('emptyState');
  const moreEl    = document.getElementById('loadMoreWrap'); // Navigasyon barı

  updateBanner(total);
  updateStats();
  updateCounts();
  updateActiveNav();

  if (total === 0) {
    area.innerHTML        = '';
    emptyEl.style.display = 'block';
    moreEl.style.display  = 'none';
    return;
  }

  emptyEl.style.display = 'none';
  // Kartı çiz
  area.innerHTML = slice.map((q) => buildCard(q, STATE.page - 1)).join('');
  
  // Önceki / Sonraki butonlarını yerleştir
  moreEl.style.display = 'flex';
  moreEl.style.justifyContent = 'center';
  moreEl.style.gap = '12px';
  
  moreEl.innerHTML = `
    <button class="btn-load-more" id="btnPrev" ${STATE.page === 1 ? 'style="display:none"' : ''}>⬅️ Önceki</button>
    <button class="btn-load-more" id="btnNext" ${STATE.page === total ? 'style="display:none"' : ''}>Sonraki ➡️</button>
  `;

  // Navigasyon tıklama olayları
  const btnPrev = document.getElementById('btnPrev');
  if (btnPrev) {
    btnPrev.addEventListener('click', () => { 
      STATE.page--; 
      renderAll(); 
      window.scrollTo({ top: 0, behavior: 'smooth' }); 
    });
  }

  const btnNext = document.getElementById('btnNext');
  if (btnNext) {
    btnNext.addEventListener('click', () => { 
      STATE.page++; 
      renderAll(); 
      window.scrollTo({ top: 0, behavior: 'smooth' }); 
    });
  }

  attachCardEvents();
}

/* ─── TOAST ─────────────────────────────────────────────────── */
let _toastTimer = null;
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(_toastTimer);
  _toastTimer = setTimeout(() => t.classList.remove('show'), 2400);
}

/* ─── SİDEBAR (MOBİL) ───────────────────────────────────────── */
function initSidebar() {
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('sidebarOverlay');
  const menuBtn = document.getElementById('mobileMenuBtn');

  const open  = () => { sidebar.classList.add('open');    overlay.classList.add('active'); };
  const close = () => { sidebar.classList.remove('open'); overlay.classList.remove('active'); };

  menuBtn.addEventListener('click', () => sidebar.classList.contains('open') ? close() : open());
  overlay.addEventListener('click', close);
}

/* ─── NAV OLAYLARI ───────────────────────────────────────────── */
function initNav() {
  document.querySelectorAll('.nav-btn[data-mode]').forEach(btn => {
    btn.addEventListener('click', function () {
      STATE.filter = this.dataset.mode;
      STATE.topic  = null;
      STATE.page   = 1;
      renderAll();
      if (window.innerWidth <= 900) {
        document.getElementById('sidebar').classList.remove('open');
        document.getElementById('sidebarOverlay').classList.remove('active');
      }
    });
  });
}

/* ─── ARAMA ─────────────────────────────────────────────────── */
function initSearch() {
  const input = document.getElementById('searchInput');
  const clear = document.getElementById('searchClear');
  let timer;

  input.addEventListener('input', () => {
    STATE.search = input.value;
    STATE.page   = 1;
    clear.classList.toggle('visible', !!input.value);
    clearTimeout(timer);
    timer = setTimeout(renderAll, 300);
  });

  clear.addEventListener('click', () => {
    input.value  = '';
    STATE.search = '';
    STATE.page   = 1;
    clear.classList.remove('visible');
    renderAll();
    input.focus();
  });
}

/* ─── SIFIRLA ────────────────────────────────────────────────── */
function initReset() {
  document.getElementById('btnReset').addEventListener('click', () => {
    if (!confirm('Tüm cevaplar ve istatistikler sıfırlanacak.\nFavoriler korunacak.\nEmin misiniz?')) return;
    answers  = {};
    wrongIds = {};
    saveAnswers();
    saveWrong();
    STATE.page = 1;
    renderAll();
    showToast('🔄 İstatistikler sıfırlandı');
  });
}

/* ─── BAŞLAT ─────────────────────────────────────────────────── */
function init() {
  renderTopicNav();
  initSidebar();
  initNav();
  initSearch();
  initReset();
  renderAll();
}

document.addEventListener('DOMContentLoaded', init);
