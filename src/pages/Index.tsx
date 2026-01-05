import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeMode, setActiveMode] = useState('campaign');

  const gameModes = [
    {
      id: 'campaign',
      title: 'Кампания',
      icon: 'Trophy',
      description: 'Пройди увлекательную историю гонщика',
      color: 'text-primary'
    },
    {
      id: 'freeride',
      title: 'Свободный заезд',
      icon: 'MapPin',
      description: 'Исследуй карты без ограничений',
      color: 'text-green-400'
    },
    {
      id: 'multiplayer',
      title: 'Мультиплеер',
      icon: 'Users',
      description: 'Соревнуйся с игроками по всему миру',
      color: 'text-accent'
    },
    {
      id: 'tuning',
      title: 'Тюнинг',
      icon: 'Wrench',
      description: 'Создай машину своей мечты',
      color: 'text-secondary'
    },
    {
      id: 'garage',
      title: 'Гараж',
      icon: 'Warehouse',
      description: 'Твоя коллекция автомобилей',
      color: 'text-gaming-blue'
    },
    {
      id: 'shop',
      title: 'Магазин',
      icon: 'ShoppingCart',
      description: 'Покупай новые машины и детали',
      color: 'text-gaming-orange'
    },
    {
      id: 'profile',
      title: 'Профиль',
      icon: 'User',
      description: 'Достижения и статистика',
      color: 'text-gaming-red'
    }
  ];

  const cars = [
    {
      name: 'Nissan GT-R R34',
      country: 'Япония',
      class: 'S',
      power: '600 HP',
      image: '🏎️',
      flag: '🇯🇵'
    },
    {
      name: 'Toyota Supra',
      country: 'Япония',
      class: 'A',
      power: '500 HP',
      image: '🚙',
      flag: '🇯🇵'
    },
    {
      name: 'Ford Mustang GT',
      country: 'США',
      class: 'A',
      power: '450 HP',
      image: '🚗',
      flag: '🇺🇸'
    },
    {
      name: 'Chevrolet Camaro',
      country: 'США',
      class: 'B',
      power: '420 HP',
      image: '🚘',
      flag: '🇺🇸'
    },
    {
      name: 'Dodge Ram 1500 (1994)',
      country: 'США',
      class: 'C',
      power: '230 HP',
      image: '🚚',
      flag: '🇺🇸'
    },
    {
      name: 'Ford Crown Victoria',
      country: 'США',
      class: 'B',
      power: '250 HP',
      image: '🚓',
      flag: '🇺🇸'
    },
    {
      name: 'Porsche 911 Turbo',
      country: 'Германия',
      class: 'S',
      power: '580 HP',
      image: '🏁',
      flag: '🇩🇪'
    },
    {
      name: 'BMW M3 E34',
      country: 'Германия',
      class: 'A',
      power: '286 HP',
      image: '🚕',
      flag: '🇩🇪'
    },
    {
      name: 'Audi Sport Quattro S1',
      country: 'Германия',
      class: 'S',
      power: '450 HP',
      image: '🚙',
      flag: '🇩🇪'
    }
  ];

  const tracks = [
    {
      name: 'Ночной Токио',
      location: 'Токио, Япония',
      weather: 'Дождь',
      difficulty: 'Сложная',
      icon: '🌃',
      flag: '🇯🇵'
    },
    {
      name: 'Улицы Манхэттена',
      location: 'Нью-Йорк, США',
      weather: 'Ясно',
      difficulty: 'Средняя',
      icon: '🏙️',
      flag: '🇺🇸'
    },
    {
      name: 'Лесное ралли',
      location: 'Финляндия',
      weather: 'Снег',
      difficulty: 'Экстремальная',
      icon: '🌲',
      flag: '🇫🇮'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gaming-dark via-gaming-darker to-gaming-dark">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(234,56,76,0.1),transparent_50%)]" />
      
      <div className="relative">
        <header className="border-b border-white/10 backdrop-blur-sm bg-black/20">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <Icon name="Zap" size={24} className="text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-black tracking-tight text-gradient">STREET RACER</h1>
                <p className="text-xs text-muted-foreground">Mobile Racing Experience</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" className="gap-2">
                <Icon name="Bell" size={18} />
                <Badge variant="destructive" className="h-5 min-w-5 px-1 text-xs">3</Badge>
              </Button>
            </div>
          </div>
        </header>

        <section className="container mx-auto px-4 py-16 text-center animate-fade-in">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-4 bg-primary/20 text-primary border-primary/30 hover:bg-primary/30">
              <Icon name="Download" size={14} className="mr-1" />
              Размер игры: 2.8 ГБ
            </Badge>
            <h2 className="text-5xl md:text-7xl font-black mb-6 text-gradient leading-tight">
              РЕАЛИСТИЧНЫЕ ГОНКИ
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              100+ автомобилей • 3 города • Погодные эффекты • Forza-физика
            </p>
            <div className="flex flex-wrap gap-4 justify-center mb-12">
              <Button size="lg" className="gap-2 bg-primary hover:bg-primary/90 text-lg px-8 py-6">
                <Icon name="Play" size={20} />
                Играть сейчас
              </Button>
              <Button size="lg" variant="outline" className="gap-2 text-lg px-8 py-6 border-white/20">
                <Icon name="Youtube" size={20} />
                Трейлер
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-16">
              <Card className="bg-card/50 backdrop-blur border-white/10 hover-scale">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-3">🌍</div>
                  <h3 className="font-bold text-lg mb-2">3 локации</h3>
                  <p className="text-sm text-muted-foreground">Токио, Нью-Йорк, Финляндия</p>
                </CardContent>
              </Card>
              <Card className="bg-card/50 backdrop-blur border-white/10 hover-scale">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-3">🏎️</div>
                  <h3 className="font-bold text-lg mb-2">100+ машин</h3>
                  <p className="text-sm text-muted-foreground">Японские, американские, немецкие</p>
                </CardContent>
              </Card>
              <Card className="bg-card/50 backdrop-blur border-white/10 hover-scale">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-3">⚡</div>
                  <h3 className="font-bold text-lg mb-2">Оптимизация</h3>
                  <p className="text-sm text-muted-foreground">60 FPS на большинстве устройств</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16">
          <h2 className="text-4xl font-black mb-8 text-center">Режимы игры</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4 max-w-7xl mx-auto">
            {gameModes.map((mode) => (
              <Card 
                key={mode.id}
                className={`cursor-pointer transition-all duration-300 bg-card/50 backdrop-blur border-white/10 hover-scale ${
                  activeMode === mode.id ? 'ring-2 ring-primary' : ''
                }`}
                onClick={() => setActiveMode(mode.id)}
              >
                <CardContent className="p-6 text-center">
                  <Icon name={mode.icon} size={32} className={`mx-auto mb-3 ${mode.color}`} />
                  <h3 className="font-bold text-sm mb-1">{mode.title}</h3>
                  <p className="text-xs text-muted-foreground leading-tight">{mode.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {activeMode === 'freeride' && (
          <section className="container mx-auto px-4 py-8">
            <Card className="bg-gradient-to-r from-green-900/20 to-green-700/20 border-green-500/30 backdrop-blur max-w-4xl mx-auto">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center">
                    <Icon name="MapPin" size={32} className="text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-green-400 mb-1">Свободный заезд</h3>
                    <p className="text-muted-foreground">Выбери карту и исследуй её без ограничений по времени</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {tracks.map((track, idx) => (
                    <Card key={idx} className="bg-card/30 border-white/10 hover-scale cursor-pointer">
                      <CardContent className="p-4">
                        <div className="text-5xl mb-3 text-center">{track.icon}</div>
                        <h4 className="font-bold text-center mb-2">{track.name}</h4>
                        <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
                          <Icon name="Cloud" size={14} />
                          <span>{track.weather}</span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>
        )}

        <section className="container mx-auto px-4 py-16">
          <h2 className="text-4xl font-black mb-8 text-center">Автомобили</h2>
          <Tabs defaultValue="japan" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 mb-8 bg-card/50 backdrop-blur">
              <TabsTrigger value="japan">🇯🇵 Япония</TabsTrigger>
              <TabsTrigger value="usa">🇺🇸 США</TabsTrigger>
              <TabsTrigger value="germany">🇩🇪 Германия</TabsTrigger>
            </TabsList>
            
            {['japan', 'usa', 'germany'].map((region) => (
              <TabsContent key={region} value={region}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {cars
                    .filter((car) => {
                      if (region === 'japan') return car.flag === '🇯🇵';
                      if (region === 'usa') return car.flag === '🇺🇸';
                      if (region === 'germany') return car.flag === '🇩🇪';
                      return false;
                    })
                    .map((car, idx) => (
                      <Card key={idx} className="bg-card/50 backdrop-blur border-white/10 hover-scale group overflow-hidden">
                        <CardContent className="p-0">
                          <div className="bg-gradient-to-br from-primary/20 to-accent/20 h-40 flex items-center justify-center text-7xl group-hover:scale-110 transition-transform duration-500">
                            {car.image}
                          </div>
                          <div className="p-6">
                            <div className="flex items-start justify-between mb-3">
                              <div>
                                <h3 className="font-bold text-lg mb-1">{car.name}</h3>
                                <p className="text-sm text-muted-foreground">{car.country}</p>
                              </div>
                              <Badge className="bg-primary/20 text-primary border-primary/30">
                                Класс {car.class}
                              </Badge>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <Icon name="Gauge" size={16} />
                              <span>{car.power}</span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </section>

        <section className="container mx-auto px-4 py-16">
          <h2 className="text-4xl font-black mb-8 text-center">Карты и локации</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {tracks.map((track, idx) => (
              <Card key={idx} className="bg-card/50 backdrop-blur border-white/10 hover-scale overflow-hidden group">
                <CardContent className="p-0">
                  <div className="bg-gradient-to-br from-accent/20 to-secondary/20 h-48 flex items-center justify-center text-8xl group-hover:scale-110 transition-transform duration-500">
                    {track.icon}
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-xl mb-2">{track.name}</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Icon name="MapPin" size={16} />
                        <span>{track.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Icon name="Cloud" size={16} />
                        <span>{track.weather}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon name="Target" size={16} className="text-primary" />
                        <span className="text-primary font-medium">{track.difficulty}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-br from-primary/20 to-secondary/20 border-white/10 backdrop-blur overflow-hidden">
              <CardContent className="p-8 md:p-12">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="flex-1">
                    <Badge className="mb-4 bg-accent/20 text-accent border-accent/30">
                      <Icon name="Gift" size={14} className="mr-1" />
                      Еженедельный бонус
                    </Badge>
                    <h2 className="text-3xl md:text-4xl font-black mb-4">Система прогресса</h2>
                    <p className="text-muted-foreground mb-6">
                      Получай уровни, репутацию и достижения. Каждую неделю бесплатные награды без доната!
                    </p>
                    <div className="space-y-4 mb-6">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium">Уровень 42</span>
                          <span className="text-sm text-muted-foreground">8,750 / 10,000 XP</span>
                        </div>
                        <Progress value={87.5} className="h-2" />
                      </div>
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium">Репутация</span>
                          <span className="text-sm text-accent font-bold">Легенда улиц</span>
                        </div>
                        <Progress value={92} className="h-2" />
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      <Badge variant="outline" className="border-primary/30 text-primary">
                        <Icon name="Trophy" size={14} className="mr-1" />
                        48 достижений
                      </Badge>
                      <Badge variant="outline" className="border-secondary/30 text-secondary">
                        <Icon name="Calendar" size={14} className="mr-1" />
                        Награда через 3 дня
                      </Badge>
                    </div>
                  </div>
                  <div className="text-8xl md:text-9xl animate-float">
                    🎯
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-gradient">
              Готов к гонкам?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Скачай игру и начни свой путь к вершине рейтинга
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gap-2 bg-primary hover:bg-primary/90 text-lg px-10 py-7">
                <Icon name="Download" size={24} />
                Скачать для Android
              </Button>
              <Button size="lg" className="gap-2 bg-muted hover:bg-muted/80 text-foreground text-lg px-10 py-7">
                <Icon name="Apple" size={24} />
                Скачать для iOS
              </Button>
            </div>
          </div>
        </section>

        <footer className="border-t border-white/10 backdrop-blur-sm bg-black/20 mt-16">
          <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-sm text-muted-foreground">
                © 2024 Street Racer. Все права защищены.
              </p>
              <div className="flex items-center gap-4">
                <Button variant="ghost" size="sm">
                  <Icon name="MessageCircle" size={18} />
                </Button>
                <Button variant="ghost" size="sm">
                  <Icon name="Twitter" size={18} />
                </Button>
                <Button variant="ghost" size="sm">
                  <Icon name="Instagram" size={18} />
                </Button>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;