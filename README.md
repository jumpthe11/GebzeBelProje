# Kocaeli Belediyesi Web Sitesi ve Yönetim Sistemi

![Java](https://img.shields.io/badge/Java-23-orange?style=flat&logo=openjdk)
![Spring Boot](https://img.shields.io/badge/Spring%20Boot-3.4.2-brightgreen?style=flat&logo=springboot)
![React](https://img.shields.io/badge/React-19.0.0-blue?style=flat&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7.2-blue?style=flat&logo=typescript)
![Oracle](https://img.shields.io/badge/Oracle-Database-red?style=flat&logo=oracle)

Kocaeli Belediyesi'nin kurumsal web sitesi ve yönetim paneli için geliştirilmiş modern, tam yığın (full-stack) web uygulamasıdır. Proje, güçlü bir Java Spring Boot backend'i ile kullanıcı dostu React TypeScript frontend'ini birleştirir.

## 🚀 Hızlı Başlangıç

### Önkoşullar
- **Java 23** veya daha yenisi
- **Maven 3.6+**
- **Node.js 18+** ve npm
- **Oracle Database** (Oracle Free sürümü desteklenir)

### 1. Backend Kurulumu
```bash
# Projeyi klonlayın ve ana dizine gidin
git clone <repository-url>
cd KocaeliBelProje

# Veritabanı ayarlarını yapılandırın
# src/main/resources/application.properties dosyasını düzenleyin

# Bağımlılıkları yükleyin ve uygulamayı başlatın
mvn clean install
mvn spring-boot:run
```

### 2. Frontend Kurulumu
```bash
# Frontend dizinine gidin
cd MEGAFrontEnd/ReactFront/react

# Bağımlılıkları yükleyin
npm install

# Geliştirme sunucusunu başlatın
npm run dev
```

### 3. Erişim
- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:8080
- **Admin Paneli**: http://localhost:5173/panel

## 📋 Proje Genel Bakış

### 🛠️ Teknoloji Yığını

**Backend:**
- Java 23 + Spring Boot 3.4.2
- Spring Security + JWT Authentication
- Spring Data JPA + Hibernate
- Oracle Database + HikariCP
- Maven

**Frontend:**
- React 19 + TypeScript
- Vite + Tailwind CSS
- React Router + TanStack Query
- Zustand (State Management)
- Material-UI + Lucide Icons

### 🏗️ Mimari Yapı

```
KocaeliBelProje/
├── src/main/java/com/kocaeli/bel/          # Backend Java kaynak kodları
│   ├── controller/                         # REST API endpoints
│   │   ├── kurumsal/                      # Kurumsal içerik API'ları
│   │   ├── gebze/                         # Gebze özel içerik API'ları
│   │   ├── hizmetler/                     # Hizmet API'ları
│   │   └── etkinlik/                      # Etkinlik API'ları
│   ├── model/                             # JPA Entity sınıfları
│   ├── repository/                        # Spring Data repositories
│   ├── service/                           # İş mantığı katmanı
│   ├── config/                            # Yapılandırma sınıfları
│   ├── security/                          # JWT güvenlik yapılandırması
│   └── DTO/                               # Data Transfer Objects
├── MEGAFrontEnd/ReactFront/react/          # Frontend React uygulaması
│   ├── src/
│   │   ├── components/                    # React bileşenleri
│   │   │   ├── AdminPanel/               # Yönetim paneli
│   │   │   ├── HomePage/                 # Ana sayfa
│   │   │   ├── NavBar/                   # Navigasyon
│   │   │   └── Layouts/                  # Sayfa düzenleri
│   │   ├── KurumsalApp.tsx              # Kurumsal uygulama
│   │   ├── HizmetlerApp.tsx             # Hizmetler uygulaması
│   │   └── GebzeApp.tsx                 # Gebze uygulaması
│   ├── package.json                      # Frontend bağımlılıkları
│   └── vite.config.ts                    # Vite yapılandırması
└── pom.xml                                # Maven yapılandırması
```

## 🎯 Özellikler

### 🏛️ Kurumsal Yönetim
- **Başkan Bilgileri**: Başkan profili ve mesajları
- **Kurumsal Kimlik**: Misyon, vizyon ve ilkeler yönetimi
- **Yönetim Şeması**: Organizasyon yapısı
- **Meclis Yönetimi**: Meclis üyeleri ve kararları
- **Etik ve Arabuluculuk**: Kurumsal etik süreçleri

### 🌆 Gebze Özel İçerik
- **Tarihçe**: İlçe tarihçesi yönetimi
- **Tarihi Yerler**: Tarihi mekanlar ve aktiviteler
- **Fotoğraflarla Gebze**: Görsel galeri yönetimi
- **Muhtarlıklar**: Mahalle muhtarlıkları bilgileri
- **Kardeş Şehirler**: Uluslararası ilişkiler
- **Üye Olunan Birlikler**: Kurum üyelikleri

### 🛠️ Hizmet Yönetimi
- **Belediye Hizmetleri**: Hizmet kataloğu yönetimi
- **Geri Dönüşüm Merkezi**: Çevre hizmetleri
- **Hizmet Detayları**: Detaylı hizmet açıklamaları

### 📅 İçerik Yönetimi
- **Etkinlikler**: Belediye etkinlikleri yönetimi
- **Haberler**: Haber yayını sistemi
- **Duyurular**: Resmi duyuru sistemi
- **Projeler**: Belediye projeleri takibi
- **Yayınlar**: Kurumsal yayın yönetimi

### 🔐 Güvenlik ve Yetkilendirme
- **JWT Authentication**: Güvenli oturum yönetimi
- **Rol Tabanlı Erişim**: Kullanıcı yetki sistemi
- **CORS Yapılandırması**: Cross-origin güvenlik
- **Password Encryption**: Şifre şifreleme (BCrypt)

## 💻 Geliştirme Komutları

### Backend Komutları
```bash
# Uygulamayı çalıştır
mvn spring-boot:run

# Testleri çalıştır
mvn test

# Temiz derleme
mvn clean compile

# Paketleme (testleri atla)
mvn package -DskipTests

# Bağımlılık analizi
mvn dependency:tree
```

### Frontend Komutları
```bash
# Geliştirme sunucusu (Tailwind CSS watch ile)
npm run dev

# Üretim derlemesi
npm run build

# Üretim önizleme
npm run preview

# Kod kalitesi kontrolü
npm run lint

# Bağımlılık güncelleme
npm update
```

## 🗄️ Veritabanı Yönetimi

### Yapılandırma
Proje Oracle veritabanı kullanır ve aşağıdaki temel yapılandırmalar mevcuttur:

```properties
# application.properties
spring.datasource.url=jdbc:oracle:thin:@SUNUCU:1521/FREE
spring.datasource.username=KULLANICI_ADI
spring.datasource.password=SIFRE
spring.jpa.database-platform=org.hibernate.dialect.OracleDialect
spring.jpa.hibernate.ddl-auto=update
```

### HikariCP Bağlantı Havuzu
```java
@Bean
public DataSource dataSource() {
    HikariDataSource dataSource = new HikariDataSource();
    dataSource.setDriverClassName("oracle.jdbc.OracleDriver");
    dataSource.setJdbcUrl("jdbc:oracle:thin:@//SUNUCU:1521/FREE");
    dataSource.setMaximumPoolSize(10);
    return dataSource;
}
```

### Yedekleme ve Geri Yükleme
```bash
# Veritabanı yedeği alma
expdp KULLANICI/SIFRE@localhost:1521/FREE schemas=KULLANICI \
  directory=EXPORT_DIR dumpfile=yedek_$(date +%Y%m%d).dmp \
  logfile=yedek_$(date +%Y%m%d).log

# Veritabanı geri yükleme
impdp KULLANICI/SIFRE@localhost:1521/FREE schemas=KULLANICI \
  directory=EXPORT_DIR dumpfile=yedek_YYYYMMDD.dmp \
  logfile=geri_yukleme.log
```

## 🔗 API Dokümantasyonu

### Kimlik Doğrulama Endpoints
```http
POST /api/auth/login    # Kullanıcı girişi
POST /api/auth/register # Kullanıcı kaydı
```

### Ana Domain Endpoints
```http
# Kurumsal İçerik
GET    /api/kurumsal/baskan/active
PUT    /api/kurumsal/baskan/{id}
GET    /api/kurumsal/misyon/active

# Gebze İçerikleri
GET    /api/gebze/tarihce/active
GET    /api/gebze/muhtarlar/active
GET    /api/gebze/galeri/active

# Hizmetler
GET    /api/hizmetler/active
GET    /api/hizmetler/geri-donusum/active

# Etkinlikler
GET    /api/etkinlik/active
POST   /api/etkinlik/create
```

## 🚧 Geliştirme Durumu

### ✅ Tamamlanan Özellikler
- [x] JWT tabanlı kimlik doğrulama sistemi
- [x] Kurumsal içerik yönetimi (Başkan, Misyon, Vizyon, İlkeler)
- [x] Gebze özel içerik yönetimi
- [x] Temel hizmet yönetimi
- [x] Kullanıcı yetki sistemi
- [x] Admin paneli temel yapısı
- [x] Responsive tasarım

### 🔄 Devam Eden Çalışmalar
- [ ] Etkinlik yönetimi genişletilmesi
- [ ] Haber ve duyuru sistemi tamamlanması
- [ ] Yayın yönetim sistemi
- [ ] İletişim modülü
- [ ] Gelişmiş arama functionality
- [ ] Çoklu dil desteği

### 📋 Bilinen Sorunlar ve Geliştirmeler
- Bazı domain controller'ların tam CRUD operasyonları eksik
- URL routing statik, dinamik hale getirilmeli
- Admin panel tasarımı geliştirilebilir
- Üretim ortamı için environment variables kullanılmalı
- Error handling ve validation genişletilebilir

## 🤝 Katkıda Bulunma

1. Projeyi fork edin
2. Feature branch oluşturun (`git checkout -b feature/AmazingFeature`)
3. Değişikliklerinizi commit edin (`git commit -m 'Add some AmazingFeature'`)
4. Branch'inizi push edin (`git push origin feature/AmazingFeature`)
5. Pull Request oluşturun

## 📄 Lisans

Bu proje Kocaeli Belediyesi için özel olarak geliştirilmiştir.

## 📞 İletişim

Proje hakkında sorularınız için:
- E-posta: [iletisim@gebze.bel.tr](mailto:iletisim@gebze.bel.tr)
- Website: [https://www.gebze.bel.tr](https://www.gebze.bel.tr)

## 🙏 Teşekkürler

Bu projeye katkıda bulunan tüm geliştiricilere ve Kocaeli Belediyesi'nin desteği için teşekkürler.
