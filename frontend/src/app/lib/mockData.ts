// Mock data for the application

export const mockUser = {
  id: '1',
  name: 'Алексей Иванов',
  username: '@alexivanov',
  avatar: 'https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1c2VyJTIwYXZhdGFyJTIwcHJvZmlsZSUyMHBpY3R1cmV8ZW58MXx8fHwxNzcwMjE3ODkxfDA&ixlib=rb-4.1.0&q=80&w=1080',
  verified: true,
  ratingAsOwner: 4.8,
  ratingAsRenter: 4.9,
  totalTrips: 12,
  joinedDate: '2025-10-15'
};

export const mockCars = [
  {
    id: '1',
    make: 'Toyota',
    model: 'Camry',
    year: 2022,
    image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b3lvdGElMjBjYW1yeSUyMGNhcnxlbnwxfHx8fDE3NzAyMTc4ODl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    pricePerDay: 3500,
    pricePerHour: 450,
    city: 'Москва',
    rating: 4.9,
    reviewsCount: 24,
    bodyType: 'Седан',
    transmission: 'Автомат',
    fuel: 'Бензин',
    class: 'Комфорт',
    ownerId: '1',
    ownerName: 'Алексей Иванов',
    ownerAvatar: 'https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1c2VyJTIwYXZhdGFyJTIwcHJvZmlsZSUyMHBpY3R1cmV8ZW58MXx8fHwxNzcwMjE3ODkxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    ownerRating: 4.8,
    available: true,
    rules: 'Не курить в салоне. Вернуть с тем же уровнем топлива. Домашние животные не разрешены.',
    features: ['Кондиционер', 'Bluetooth', 'Подогрев сидений', 'Камера заднего вида']
  },
  {
    id: '2',
    make: 'Kia',
    model: 'Rio',
    year: 2021,
    image: 'https://images.unsplash.com/photo-1633359064754-804ba55e733f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoeXVuZGFpJTIwc29sYXJpcyUyMGNhcnxlbnwxfHx8fDE3NzAyMTc4OTB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    pricePerDay: 2800,
    pricePerHour: 350,
    city: 'Москва',
    rating: 4.7,
    reviewsCount: 18,
    bodyType: 'Седан',
    transmission: 'Автомат',
    fuel: 'Бензин',
    class: 'Эконом',
    ownerId: '2',
    ownerName: 'Мария Петрова',
    ownerAvatar: 'https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1c2VyJTIwYXZhdGFyJTIwcHJvZmlsZSUyMHBpY3R1cmV8ZW58MXx8fHwxNzcwMjE3ODkxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    ownerRating: 4.9,
    available: true,
    rules: 'Возврат с полным баком. Не курить.',
    features: ['Кондиционер', 'USB', 'AUX']
  },
  {
    id: '3',
    make: 'Hyundai',
    model: 'Solaris',
    year: 2023,
    image: 'https://images.unsplash.com/photo-1633359064754-804ba55e733f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoeXVuZGFpJTIwc29sYXJpcyUyMGNhcnxlbnwxfHx8fDE3NzAyMTc4OTB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    pricePerDay: 3000,
    pricePerHour: 400,
    city: 'Москва',
    rating: 5.0,
    reviewsCount: 8,
    bodyType: 'Седан',
    transmission: 'Механика',
    fuel: 'Бензин',
    class: 'Комфорт',
    ownerId: '3',
    ownerName: 'Дмитрий Соколов',
    ownerAvatar: 'https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1c2VyJTIwYXZhdGFyJTIwcHJvZmlsZSUyMHBpY3R1cmV8ZW58MXx8fHwxNzcwMjE3ODkxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    ownerRating: 5.0,
    available: true,
    rules: 'Аккуратное вождение. Возврат чистым.',
    features: ['Кондиционер', 'Подогрев сидений']
  }
];

export const mockBookings = [
  {
    id: '1',
    carId: '2',
    car: mockCars[1],
    startDate: '2026-02-10',
    endDate: '2026-02-12',
    totalPrice: 8400,
    status: 'pending', // pending, confirmed, active, completed, cancelled
    renterName: 'Иван Смирнов',
    renterAvatar: 'https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1c2VyJTIwYXZhdGFyJTIwcHJvZmlsZSUyMHBpY3R1cmV8ZW58MXx8fHwxNzcwMjE3ODkxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    renterRating: 4.7,
    message: 'Нужна машина на выходные',
    meetingLocation: 'Подъезд 1, 10:00'
  },
  {
    id: '2',
    carId: '1',
    car: mockCars[0],
    startDate: '2026-02-06',
    endDate: '2026-02-09',
    totalPrice: 10500,
    status: 'confirmed',
    renterName: 'Елена Волкова',
    renterAvatar: 'https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1c2VyJTIwYXZhdGFyJTIwcHJvZmlsZSUyMHBpY3R1cmV8ZW58MXx8fHwxNzcwMjE3ODkxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    renterRating: 5.0,
    message: '',
    meetingLocation: 'У парадного, 09:00'
  },
  {
    id: '3',
    carId: '3',
    car: mockCars[2],
    startDate: '2026-01-28',
    endDate: '2026-01-30',
    totalPrice: 6000,
    status: 'completed',
    renterName: 'Сергей Новиков',
    renterAvatar: 'https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1c2VyJTIwYXZhdGFyJTIwcHJvZmlsZSUyMHBpY3R1cmV8ZW58MXx8fHwxNzcwMjE3ODkxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    renterRating: 4.8,
    message: '',
    meetingLocation: ''
  }
];

export const mockReviews = [
  {
    id: '1',
    userId: '101',
    userName: 'Иван Петров',
    userAvatar: 'https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1c2VyJTIwYXZhdGFyJTIwcHJvZmlsZSUyMHBpY3R1cmV8ZW58MXx8fHwxNzcwMjE3ODkxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 5,
    comment: 'Отличная машина, чистая, владелец пунктуальный. Рекомендую!',
    date: '2026-01-20'
  },
  {
    id: '2',
    userId: '102',
    userName: 'Мария Сидорова',
    userAvatar: 'https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1c2VyJTIwYXZhdGFyJTIwcHJvZmlsZSUyMHBpY3R1cmV8ZW58MXx8fHwxNzcwMjE3ODkxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 5,
    comment: 'Всё прошло отлично, машина в идеальном состоянии.',
    date: '2026-01-15'
  },
  {
    id: '3',
    userId: '103',
    userName: 'Андрей Козлов',
    userAvatar: 'https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1c2VyJTIwYXZhdGFyJTIwcHJvZmlsZSUyMHBpY3R1cmV8ZW58MXx8fHwxNzcwMjE3ODkxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4,
    comment: 'Хорошая машина, небольшая царапина на двери была, но в целом всё ок.',
    date: '2026-01-10'
  }
];

export const mockMessages = [
  {
    id: '1',
    bookingId: '1',
    partnerId: '101',
    partnerName: 'Иван Смирнов',
    partnerAvatar: 'https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1c2VyJTIwYXZhdGFyJTIwcHJvZmlsZSUyMHBpY3R1cmV8ZW58MXx8fHwxNzcwMjE3ODkxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    lastMessage: 'Договорились, встречаемся у подъезда в 10:00',
    lastMessageTime: '2026-02-03T15:30:00',
    unreadCount: 2,
    car: mockCars[1]
  },
  {
    id: '2',
    bookingId: '2',
    partnerId: '102',
    partnerName: 'Елена Волкова',
    partnerAvatar: 'https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1c2VyJTIwYXZhdGFyJTIwcHJvZmlsZSUyMHBpY3R1cmV8ZW58MXx8fHwxNzcwMjE3ODkxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    lastMessage: 'Спасибо! До встречи завтра',
    lastMessageTime: '2026-02-03T12:00:00',
    unreadCount: 1,
    car: mockCars[0]
  },
  {
    id: '3',
    bookingId: '3',
    partnerId: '103',
    partnerName: 'Сергей Новиков',
    partnerAvatar: 'https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1c2VyJTIwYXZhdGFyJTIwcHJvZmlsZSUyMHBpY3R1cmV8ZW58MXx8fHwxNzcwMjE3ODkxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    lastMessage: 'Отличная поездка, спасибо!',
    lastMessageTime: '2026-01-30T18:00:00',
    unreadCount: 0,
    car: mockCars[2]
  }
];

export const mockNotifications = [
  {
    id: '1',
    type: 'booking_request',
    title: 'Новая заявка на Toyota Camry',
    message: 'Иван Смирнов хочет арендовать ваше авто',
    time: '2026-02-04T10:00:00',
    read: false
  },
  {
    id: '2',
    type: 'booking_confirmed',
    title: 'Бронирование подтверждено',
    message: 'Елена Волкова подтвердила вашу заявку',
    time: '2026-02-03T14:30:00',
    read: false
  },
  {
    id: '3',
    type: 'reminder',
    title: 'Напоминание: аренда завтра',
    message: 'Не забудьте встретиться с Еленой у парадного в 09:00',
    time: '2026-02-05T09:00:00',
    read: true
  },
  {
    id: '4',
    type: 'review',
    title: 'Новый отзыв',
    message: 'Сергей Новиков оставил отзыв',
    time: '2026-01-30T18:30:00',
    read: true
  }
];
