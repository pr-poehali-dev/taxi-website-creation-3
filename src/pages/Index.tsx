import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [distance, setDistance] = useState('');
  const [selectedTariff, setSelectedTariff] = useState('');
  const [calculatedPrice, setCalculatedPrice] = useState<number | null>(null);

  const tariffs = [
    {
      id: 'econom',
      name: 'Эконом',
      basePrice: 100,
      perKm: 15,
      icon: 'Car',
      features: ['Стандартный автомобиль', 'Опытный водитель', 'Безналичный расчет'],
      color: 'bg-gray-100'
    },
    {
      id: 'comfort',
      name: 'Комфорт',
      basePrice: 150,
      perKm: 20,
      icon: 'Award',
      features: ['Автомобиль бизнес-класса', 'Климат-контроль', 'Wi-Fi в салоне'],
      color: 'bg-yellow-50'
    },
    {
      id: 'vip',
      name: 'VIP',
      basePrice: 300,
      perKm: 35,
      icon: 'Crown',
      features: ['Премиум автомобиль', 'Персональный водитель', 'Напитки в салоне'],
      color: 'bg-amber-50'
    }
  ];

  const services = [
    {
      title: 'Городские поездки',
      description: 'Быстрая и комфортная доставка по городу в любое время суток',
      icon: 'MapPin'
    },
    {
      title: 'Межгород',
      description: 'Путешествуйте между городами с комфортом и безопасностью',
      icon: 'Route'
    },
    {
      title: 'Аэропорт',
      description: 'Трансфер в аэропорт и обратно с гарантией точности времени',
      icon: 'Plane'
    },
    {
      title: 'Грузоперевозки',
      description: 'Доставка грузов и переезды с профессиональными грузчиками',
      icon: 'Package'
    }
  ];

  const calculatePrice = () => {
    if (distance && selectedTariff) {
      const tariff = tariffs.find(t => t.id === selectedTariff);
      if (tariff) {
        const price = tariff.basePrice + (parseFloat(distance) * tariff.perKm);
        setCalculatedPrice(Math.round(price));
      }
    }
  };

  return (
    <div className="min-h-screen">
      <header className="bg-secondary text-secondary-foreground py-4 px-6 sticky top-0 z-50 shadow-md">
        <nav className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Zap" className="text-primary" size={32} />
            <span className="text-2xl font-bold">ТаксиДрайв</span>
          </div>
          <div className="hidden md:flex gap-6">
            <a href="#hero" className="hover:text-primary transition-colors">Главная</a>
            <a href="#services" className="hover:text-primary transition-colors">Услуги</a>
            <a href="#calculator" className="hover:text-primary transition-colors">Калькулятор</a>
            <a href="#tariffs" className="hover:text-primary transition-colors">Тарифы</a>
            <a href="#about" className="hover:text-primary transition-colors">О нас</a>
            <a href="#contacts" className="hover:text-primary transition-colors">Контакты</a>
          </div>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Icon name="Phone" size={18} className="mr-2" />
            Заказать
          </Button>
        </nav>
      </header>

      <section id="hero" className="relative bg-gradient-to-br from-secondary via-secondary to-gray-800 text-white py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 bg-primary rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        <div className="container mx-auto text-center relative z-10 animate-fade-in">
          <h1 className="text-6xl md:text-7xl font-extrabold mb-6 tracking-tight">
            Ваше такси <span className="text-primary">мгновенно</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Быстро, надежно, доступно. Более 500 водителей готовы приехать к вам в любую точку города за 5 минут!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 transform hover:scale-105 transition-transform">
              <Icon name="Car" size={24} className="mr-2" />
              Заказать такси
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-white/10 hover:bg-white/20 border-white text-white transform hover:scale-105 transition-transform">
              <Icon name="Calculator" size={24} className="mr-2" />
              Рассчитать стоимость
            </Button>
          </div>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 transform hover:scale-105 transition-transform">
              <Icon name="Clock" size={40} className="text-primary mb-3 mx-auto" />
              <h3 className="text-2xl font-bold mb-2">5 минут</h3>
              <p className="text-gray-200">Среднее время подачи</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 transform hover:scale-105 transition-transform">
              <Icon name="Users" size={40} className="text-primary mb-3 mx-auto" />
              <h3 className="text-2xl font-bold mb-2">500+</h3>
              <p className="text-gray-200">Водителей в парке</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 transform hover:scale-105 transition-transform">
              <Icon name="Star" size={40} className="text-primary mb-3 mx-auto" />
              <h3 className="text-2xl font-bold mb-2">4.9/5</h3>
              <p className="text-gray-200">Рейтинг сервиса</p>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold text-center mb-4">Наши услуги</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">Широкий спектр транспортных решений для любых задач</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-all transform hover:-translate-y-2 border-2 border-transparent hover:border-primary animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <Icon name={service.icon} size={32} className="text-primary" />
                  </div>
                  <CardTitle className="text-center text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="calculator" className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-5xl font-bold text-center mb-4">Калькулятор стоимости</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">Узнайте точную стоимость поездки прямо сейчас</p>
          <Card className="shadow-2xl border-2">
            <CardHeader>
              <CardTitle className="text-2xl">Рассчитайте стоимость вашей поездки</CardTitle>
              <CardDescription>Введите расстояние и выберите тариф для расчета</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="distance">Расстояние (км)</Label>
                <Input
                  id="distance"
                  type="number"
                  placeholder="Введите расстояние"
                  value={distance}
                  onChange={(e) => setDistance(e.target.value)}
                  className="text-lg"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="tariff">Выберите тариф</Label>
                <Select value={selectedTariff} onValueChange={setSelectedTariff}>
                  <SelectTrigger className="text-lg">
                    <SelectValue placeholder="Выберите тариф" />
                  </SelectTrigger>
                  <SelectContent>
                    {tariffs.map((tariff) => (
                      <SelectItem key={tariff.id} value={tariff.id}>
                        {tariff.name} (от {tariff.basePrice}₽ + {tariff.perKm}₽/км)
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <Button 
                onClick={calculatePrice} 
                className="w-full text-lg py-6 bg-primary hover:bg-primary/90 transform hover:scale-105 transition-transform"
                disabled={!distance || !selectedTariff}
              >
                <Icon name="Calculator" size={20} className="mr-2" />
                Рассчитать стоимость
              </Button>
              {calculatedPrice !== null && (
                <div className="mt-6 p-6 bg-primary/10 rounded-lg border-2 border-primary animate-scale-in">
                  <p className="text-center text-lg mb-2">Стоимость поездки:</p>
                  <p className="text-center text-5xl font-bold text-primary">{calculatedPrice} ₽</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="tariffs" className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold text-center mb-4">Тарифы</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">Выберите оптимальный вариант для вас</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {tariffs.map((tariff, index) => (
              <Card key={tariff.id} className={`hover:shadow-2xl transition-all transform hover:-translate-y-3 ${tariff.color} border-2 hover:border-primary animate-slide-up`} style={{ animationDelay: `${index * 0.15}s` }}>
                <CardHeader>
                  <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mb-4 mx-auto">
                    <Icon name={tariff.icon} size={40} className="text-secondary" />
                  </div>
                  <CardTitle className="text-center text-3xl">{tariff.name}</CardTitle>
                  <CardDescription className="text-center text-lg mt-2">
                    <span className="text-3xl font-bold text-foreground">{tariff.basePrice}₽</span>
                    <span className="text-muted-foreground"> + {tariff.perKm}₽/км</span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {tariff.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Icon name="Check" size={20} className="text-primary flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-6 bg-primary hover:bg-primary/90 transform hover:scale-105 transition-transform">
                    Заказать {tariff.name}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-5xl font-bold text-center mb-4">О компании</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">Мы создаем комфорт каждую поездку</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <Icon name="Shield" size={40} className="text-primary mb-3" />
                <CardTitle>Безопасность</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Все водители проходят строгую проверку и регулярное обучение. Автомобили застрахованы и проходят техосмотр.</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <Icon name="Sparkles" size={40} className="text-primary mb-3" />
                <CardTitle>Качество</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Чистые автомобили, вежливые водители и быстрая подача. Мы ценим ваше время и комфорт.</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <Icon name="Clock" size={40} className="text-primary mb-3" />
                <CardTitle>Круглосуточно</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Работаем 24/7 без выходных и праздников. Вы можете заказать такси в любое удобное время.</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <Icon name="Wallet" size={40} className="text-primary mb-3" />
                <CardTitle>Выгодные цены</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Прозрачное ценообразование без скрытых платежей. Регулярные акции и скидки для постоянных клиентов.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-6 bg-gradient-to-br from-secondary to-gray-800 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-5xl font-bold mb-4">Контакты</h2>
          <p className="text-xl text-gray-200 mb-12">Свяжитесь с нами удобным способом</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 transform hover:scale-105 transition-transform">
              <Icon name="Phone" size={48} className="text-primary mb-4 mx-auto" />
              <h3 className="text-xl font-bold mb-2">Телефон</h3>
              <p className="text-gray-200">+7 (999) 123-45-67</p>
              <p className="text-gray-200">+7 (999) 765-43-21</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 transform hover:scale-105 transition-transform">
              <Icon name="Mail" size={48} className="text-primary mb-4 mx-auto" />
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <p className="text-gray-200">info@taxidrive.ru</p>
              <p className="text-gray-200">support@taxidrive.ru</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 transform hover:scale-105 transition-transform">
              <Icon name="MapPin" size={48} className="text-primary mb-4 mx-auto" />
              <h3 className="text-xl font-bold mb-2">Адрес</h3>
              <p className="text-gray-200">г. Москва</p>
              <p className="text-gray-200">ул. Примерная, д. 123</p>
            </div>
          </div>
          <Button size="lg" className="mt-12 bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-10 py-6 transform hover:scale-105 transition-transform">
            <Icon name="MessageCircle" size={24} className="mr-2" />
            Написать нам
          </Button>
        </div>
      </section>

      <footer className="bg-secondary text-secondary-foreground py-8 px-6">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Icon name="Zap" className="text-primary" size={28} />
            <span className="text-xl font-bold">ТаксиДрайв</span>
          </div>
          <p className="text-gray-300 mb-4">Ваше надежное такси в любую точку города</p>
          <p className="text-sm text-gray-400">© 2024 ТаксиДрайв. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
