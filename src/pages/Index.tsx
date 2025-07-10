import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Весенняя акция по посадке деревьев",
      content:
        "Сегодня участники лесничества высадили 150 саженцев дуба и березы в парке имени Гагарина. Это важный вклад в экологию нашего города!",
      category: "Мероприятия",
      date: "2024-04-15",
      author: "Иван Петров",
    },
    {
      id: 2,
      title: "Результаты экологического мониторинга",
      content:
        "Проведен анализ состояния лесных участков. Обнаружено улучшение показателей биоразнообразия на 15% по сравнению с прошлым годом.",
      category: "Исследования",
      date: "2024-04-10",
      author: "Мария Сидорова",
    },
  ]);

  const [newPost, setNewPost] = useState({
    title: "",
    content: "",
    category: "",
    author: "",
  });

  const handleAddPost = () => {
    if (
      newPost.title &&
      newPost.content &&
      newPost.category &&
      newPost.author
    ) {
      const post = {
        id: posts.length + 1,
        ...newPost,
        date: new Date().toISOString().split("T")[0],
      };
      setPosts([post, ...posts]);
      setNewPost({ title: "", content: "", category: "", author: "" });
    }
  };

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
            <nav className="hidden md:flex space-x-6 items-center">
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
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="bg-white text-forest hover:bg-gray-100">
                    <Icon name="Plus" className="mr-2" size={16} />
                    Написать пост
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[600px]">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-montserrat text-forest">
                      Создать новый пост
                    </DialogTitle>
                  </DialogHeader>
                  <div className="space-y-6 py-4">
                    <div className="space-y-2">
                      <Label
                        htmlFor="title"
                        className="text-sm font-medium text-forest"
                      >
                        Заголовок поста
                      </Label>
                      <Input
                        id="title"
                        placeholder="Введите заголовок..."
                        value={newPost.title}
                        onChange={(e) =>
                          setNewPost({ ...newPost, title: e.target.value })
                        }
                        className="border-forest-light focus:border-forest"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label
                        htmlFor="content"
                        className="text-sm font-medium text-forest"
                      >
                        Содержание
                      </Label>
                      <Textarea
                        id="content"
                        placeholder="Расскажите о вашем мероприятии, исследовании или новости..."
                        value={newPost.content}
                        onChange={(e) =>
                          setNewPost({ ...newPost, content: e.target.value })
                        }
                        className="min-h-[120px] border-forest-light focus:border-forest"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label
                          htmlFor="category"
                          className="text-sm font-medium text-forest"
                        >
                          Категория
                        </Label>
                        <Select
                          value={newPost.category}
                          onValueChange={(value) =>
                            setNewPost({ ...newPost, category: value })
                          }
                        >
                          <SelectTrigger className="border-forest-light focus:border-forest">
                            <SelectValue placeholder="Выберите категорию" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Мероприятия">
                              🌱 Мероприятия
                            </SelectItem>
                            <SelectItem value="Исследования">
                              🔬 Исследования
                            </SelectItem>
                            <SelectItem value="Новости">📰 Новости</SelectItem>
                            <SelectItem value="Образование">
                              📚 Образование
                            </SelectItem>
                            <SelectItem value="Достижения">
                              🏆 Достижения
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label
                          htmlFor="author"
                          className="text-sm font-medium text-forest"
                        >
                          Автор
                        </Label>
                        <Input
                          id="author"
                          placeholder="Ваше имя"
                          value={newPost.author}
                          onChange={(e) =>
                            setNewPost({ ...newPost, author: e.target.value })
                          }
                          className="border-forest-light focus:border-forest"
                        />
                      </div>
                    </div>

                    <div className="flex justify-end space-x-3 pt-4">
                      <DialogTrigger asChild>
                        <Button
                          variant="outline"
                          className="border-forest text-forest hover:bg-forest-light/10"
                        >
                          Отмена
                        </Button>
                      </DialogTrigger>
                      <DialogTrigger asChild>
                        <Button
                          onClick={handleAddPost}
                          className="bg-forest hover:bg-forest-dark text-white"
                          disabled={
                            !newPost.title ||
                            !newPost.content ||
                            !newPost.category ||
                            !newPost.author
                          }
                        >
                          <Icon name="Send" className="mr-2" size={16} />
                          Опубликовать
                        </Button>
                      </DialogTrigger>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
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

      {/* Blog/News Section */}
      <section className="py-20 bg-gradient-to-br from-white to-nature-warm">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-forest text-white">
              📰 Новости и события
            </Badge>
            <h2 className="text-4xl font-montserrat font-bold text-forest mb-6">
              Последние новости лесничества
            </h2>
            <p className="text-xl font-open-sans text-gray-600 max-w-3xl mx-auto">
              Следите за нашими достижениями, мероприятиями и исследованиями
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {posts.map((post) => (
              <Card
                key={post.id}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white"
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <Badge className="bg-forest-light text-white">
                      {post.category}
                    </Badge>
                    <div className="flex items-center text-sm text-gray-500">
                      <Icon name="Calendar" className="mr-1" size={14} />
                      {new Date(post.date).toLocaleDateString("ru-RU")}
                    </div>
                  </div>
                  <CardTitle className="text-xl font-montserrat font-semibold text-forest mb-2">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 font-open-sans leading-relaxed mb-4">
                    {post.content}
                  </CardDescription>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <Icon name="User" className="mr-1" size={14} />
                      {post.author}
                    </div>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="text-forest hover:bg-forest-light/10"
                    >
                      Читать полностью
                      <Icon name="ArrowRight" className="ml-1" size={14} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              variant="outline"
              className="border-forest text-forest hover:bg-forest hover:text-white"
            >
              <Icon name="Archive" className="mr-2" size={16} />
              Показать все новости
            </Button>
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
