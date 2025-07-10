import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
  const activities = [
    {
      title: "Экологические исследования",
      description:
        "Мониторинг состояния лесных экосистем и изучение биоразнообразия",
      icon: "Search",
      color: "bg-forest text-white",
    },
    {
      title: "Посадка деревьев",
      description: "Восстановление лесов и создание новых зеленых зон",
      icon: "TreePine",
      color: "bg-nature-sage text-white",
    },
    {
      title: "Образовательные программы",
      description: "Экскурсии, лекции и практические занятия по экологии",
      icon: "BookOpen",
      color: "bg-forest-light text-white",
    },
    {
      title: "Природоохранная деятельность",
      description: "Защита редких видов растений и животных",
      icon: "Shield",
      color: "bg-nature-sage text-white",
    },
    {
      title: "Конкурсы и олимпиады",
      description: "Участие в экологических соревнованиях и научных проектах",
      icon: "Trophy",
      color: "bg-forest text-white",
    },
  ];

  const events = [
    {
      title: "Весенняя посадка деревьев",
      date: "15 апреля 2024",
      participants: "25 учеников",
      status: "Запланировано",
    },
    {
      title: "Экологический мониторинг",
      date: "22 апреля 2024",
      participants: "12 учеников",
      status: "В процессе",
    },
    {
      title: "День леса",
      date: "21 марта 2024",
      participants: "50 учеников",
      status: "Завершено",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-nature-warm to-white">
      {/* Header */}
      <header className="bg-forest shadow-lg">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="bg-white p-2 rounded-full">
                <Icon name="TreePine" className="text-forest" size={32} />
              </div>
              <div>
                <h1 className="text-2xl font-montserrat font-bold text-white">
                  Школьное лесничество "Росток"
                </h1>
                <p className="text-forest-light font-open-sans">
                  Воспитываем защитников природы
                </p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-6">
              <Button
                variant="ghost"
                className="text-white hover:bg-forest-light"
              >
                Главная
              </Button>
              <Button
                variant="ghost"
                className="text-white hover:bg-forest-light"
              >
                О лесничестве
              </Button>
              <Button
                variant="ghost"
                className="text-white hover:bg-forest-light"
              >
                Мероприятия
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-forest text-white">
                🌱 Экологическое образование
              </Badge>
              <h2 className="text-5xl font-montserrat font-bold text-forest mb-6 leading-tight">
                Растим будущих
                <span className="text-forest-light"> защитников</span> природы
              </h2>
              <p className="text-xl font-open-sans text-gray-700 mb-8 leading-relaxed">
                Школьное лесничество "Росток" объединяет учеников, увлеченных
                изучением и охраной природы. Мы проводим исследования,
                восстанавливаем леса и развиваем экологическое сознание.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-forest hover:bg-forest-dark text-white"
                >
                  <Icon name="Users" className="mr-2" size={20} />
                  Присоединиться
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-forest text-forest hover:bg-forest hover:text-white"
                >
                  <Icon name="Calendar" className="mr-2" size={20} />
                  Мероприятия
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/img/5383a241-18ef-41ea-a82a-9a7d23f3ac8a.jpg"
                  alt="Школьное лесничество"
                  className="w-full h-96 object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-4">
                  <div className="bg-forest p-3 rounded-full">
                    <Icon name="Award" className="text-white" size={24} />
                  </div>
                  <div>
                    <p className="font-montserrat font-semibold text-forest">
                      5 лет
                    </p>
                    <p className="text-sm text-gray-600">
                      экологической работы
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-forest-light text-white">
              🌳 О нашем лесничестве
            </Badge>
            <h2 className="text-4xl font-montserrat font-bold text-forest mb-6">
              Направления нашей деятельности
            </h2>
            <p className="text-xl font-open-sans text-gray-600 max-w-3xl mx-auto">
              Мы работаем по пяти основным направлениям, каждое из которых
              способствует формированию экологической культуры и практических
              навыков
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activities.map((activity, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg"
              >
                <CardHeader className="pb-4">
                  <div
                    className={`w-12 h-12 ${activity.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon name={activity.icon} size={24} />
                  </div>
                  <CardTitle className="text-xl font-montserrat font-semibold text-forest">
                    {activity.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 font-open-sans leading-relaxed">
                    {activity.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-20 bg-gradient-to-r from-nature-warm to-forest-light/10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-forest text-white">
              📅 Наши мероприятия
            </Badge>
            <h2 className="text-4xl font-montserrat font-bold text-forest mb-6">
              Актуальные события
            </h2>
            <p className="text-xl font-open-sans text-gray-600 max-w-3xl mx-auto">
              Следите за нашими экологическими акциями, исследованиями и
              образовательными программами
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white"
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <Badge
                      className={`${
                        event.status === "Завершено"
                          ? "bg-green-100 text-green-800"
                          : event.status === "В процессе"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-blue-100 text-blue-800"
                      }`}
                    >
                      {event.status}
                    </Badge>
                    <Icon
                      name="Calendar"
                      className="text-forest-light"
                      size={20}
                    />
                  </div>
                  <CardTitle className="text-lg font-montserrat font-semibold text-forest">
                    {event.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center text-gray-600">
                      <Icon name="Clock" className="mr-2" size={16} />
                      <span className="font-open-sans">{event.date}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Icon name="Users" className="mr-2" size={16} />
                      <span className="font-open-sans">
                        {event.participants}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-forest text-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Icon name="TreePine" size={32} />
              </div>
              <h3 className="text-3xl font-montserrat font-bold mb-2">500+</h3>
              <p className="font-open-sans text-forest-light">
                Посаженных деревьев
              </p>
            </div>
            <div className="text-center">
              <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Icon name="Users" size={32} />
              </div>
              <h3 className="text-3xl font-montserrat font-bold mb-2">75</h3>
              <p className="font-open-sans text-forest-light">
                Активных участников
              </p>
            </div>
            <div className="text-center">
              <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Icon name="Award" size={32} />
              </div>
              <h3 className="text-3xl font-montserrat font-bold mb-2">12</h3>
              <p className="font-open-sans text-forest-light">
                Наград и дипломов
              </p>
            </div>
            <div className="text-center">
              <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Icon name="MapPin" size={32} />
              </div>
              <h3 className="text-3xl font-montserrat font-bold mb-2">8</h3>
              <p className="font-open-sans text-forest-light">
                Экологических зон
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-forest-dark text-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Icon name="TreePine" size={24} />
                <h3 className="text-xl font-montserrat font-bold">
                  Школьное лесничество "Росток"
                </h3>
              </div>
              <p className="font-open-sans text-gray-300">
                Воспитываем ответственное отношение к природе и развиваем
                экологическое сознание молодежи.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-montserrat font-semibold mb-4">
                Контакты
              </h4>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Icon name="Phone" className="mr-2" size={16} />
                  <span className="font-open-sans">+7 (XXX) XXX-XX-XX</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Mail" className="mr-2" size={16} />
                  <span className="font-open-sans">rostok@school.ru</span>
                </div>
                <div className="flex items-center">
                  <Icon name="MapPin" className="mr-2" size={16} />
                  <span className="font-open-sans">
                    г. Образец, ул. Школьная, 1
                  </span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-montserrat font-semibold mb-4">
                Социальные сети
              </h4>
              <div className="flex space-x-4">
                <Button
                  size="sm"
                  variant="ghost"
                  className="text-white hover:bg-white/20"
                >
                  <Icon name="Facebook" size={20} />
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  className="text-white hover:bg-white/20"
                >
                  <Icon name="Instagram" size={20} />
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  className="text-white hover:bg-white/20"
                >
                  <Icon name="Youtube" size={20} />
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-forest-light mt-8 pt-8 text-center">
            <p className="font-open-sans text-gray-300">
              © 2024 Школьное лесничество "Росток". Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
