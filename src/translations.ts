export type Language = 'id' | 'en' | 'zh';

export interface Translation {
  nav: {
    home: string;
    about: string;
    agricultural: string;
    marine: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
  };
  about: {
    title: string;
    vision: {
      title: string;
      content: string;
    };
    mission: {
      title: string;
      content: string;
    };
    values: {
      title: string;
      items: {
        quality: string;
        integrity: string;
        sustainability: string;
      };
    };
  };
  agricultural: {
    title: string;
    description: string;
    products: {
      nutmegShell: {
        name: string;
        desc: string;
      };
    };
  };
  marine: {
    title: string;
    description: string;
    products: {
      driedSeaworm: {
        name: string;
        desc: string;
      };
      driedFishMaw: {
        name: string;
        desc: string;
      };
    };
  };
  contact: {
    title: string;
    address: string;
    location: string;
  };
  stats: {
    experience: string;
    countries: string;
    volume: string;
    experienceLabel: string;
    countriesLabel: string;
    volumeLabel: string;
  };
  process: {
    title: string;
    steps: {
      sourcing: { title: string; desc: string };
      drying: { title: string; desc: string };
      sorting: { title: string; desc: string };
      packaging: { title: string; desc: string };
    };
  };
}

export const translations: Record<Language, Translation> = {
  id: {
    nav: {
      home: 'Beranda',
      about: 'Profil',
      agricultural: 'Hasil Bumi',
      marine: 'Hasil Laut',
      contact: 'Kontak',
    },
    hero: {
      title: 'CV Yelin Shan Hang',
      subtitle: 'Exportir Terpercaya Hasil Bumi & Hasil Laut dari Indonesia',
    },
    about: {
      title: 'Profil Perusahaan',
      vision: {
        title: 'Visi',
        content: 'Menjadi mitra ekspor terkemuka yang menghubungkan kekayaan alam Indonesia dengan pasar global melalui kualitas dan kepercayaan.',
      },
      mission: {
        title: 'Misi',
        content: 'Menyediakan produk hasil bumi dan laut terbaik dengan standar internasional, memberdayakan sumber daya lokal, dan menjamin kepuasan pelanggan melalui layanan yang unggul.',
      },
      values: {
        title: 'Nilai Kami',
        items: {
          quality: 'Kualitas Premium',
          integrity: 'Integritas Bisnis',
          sustainability: 'Keberlanjutan Alam',
        },
      },
    },
    agricultural: {
      title: 'Hasil Bumi',
      description: 'Kami menyediakan hasil bumi berkualitas tinggi untuk pasar internasional.',
      products: {
        nutmegShell: {
          name: 'Cangkang Pala (Nutmeg Shell)',
          desc: 'Cangkang pala berkualitas tinggi, diproses dengan standar ekspor.',
        },
      },
    },
    marine: {
      title: 'Hasil Laut',
      description: 'Kekayaan laut Indonesia yang diproses secara alami dan higienis.',
      products: {
        driedSeaworm: {
          name: 'Cacing Laut Kering (Dried Seaworm)',
          desc: 'Cacing laut pilihan yang dikeringkan secara sempurna.',
        },
        driedFishMaw: {
          name: 'Gelembung Ikan Kering (Dried Fish Maw)',
          desc: 'Gelembung ikan premium dengan nilai nutrisi tinggi.',
        },
      },
    },
    contact: {
      title: 'Hubungi Kami',
      address: 'Alamat Kami',
      location: 'Mutiara Margomulyo Indah Blok K, 21, Manukan Wetan, Tandes, Kota Surabaya, Jawa Timur, Indonesia',
    },
    stats: {
      experience: '10+',
      countries: '15+',
      volume: '1000+',
      experienceLabel: 'Tahun Pengalaman',
      countriesLabel: 'Negara Tujuan',
      volumeLabel: 'Ton Produk Terkirim',
    },
    process: {
      title: 'Proses Kualitas Kami',
      steps: {
        sourcing: { title: 'Sourcing', desc: 'Memilih bahan baku terbaik langsung dari petani dan nelayan lokal.' },
        drying: { title: 'Pengeringan', desc: 'Proses pengeringan alami untuk menjaga nutrisi dan kualitas.' },
        sorting: { title: 'Sortir', desc: 'Seleksi ketat untuk memastikan hanya produk terbaik yang dikirim.' },
        packaging: { title: 'Pengemasan', desc: 'Standar pengemasan internasional untuk keamanan selama pengiriman.' },
      },
    },
  },
  en: {
    nav: {
      home: 'Home',
      about: 'Profile',
      agricultural: 'Agricultural',
      marine: 'Marine',
      contact: 'Contact',
    },
    hero: {
      title: 'CV Yelin Shan Hang',
      subtitle: 'Trusted Exporter of Agricultural & Marine Products from Indonesia',
    },
    about: {
      title: 'Company Profile',
      vision: {
        title: 'Vision',
        content: 'To be a leading export partner connecting Indonesia\'s natural wealth with the global market through quality and trust.',
      },
      mission: {
        title: 'Mission',
        content: 'To provide the best agricultural and marine products with international standards, empower local resources, and ensure customer satisfaction through superior service.',
      },
      values: {
        title: 'Our Values',
        items: {
          quality: 'Premium Quality',
          integrity: 'Business Integrity',
          sustainability: 'Natural Sustainability',
        },
      },
    },
    agricultural: {
      title: 'Agricultural Products',
      description: 'We provide high-quality agricultural products for the international market.',
      products: {
        nutmegShell: {
          name: 'Nutmeg Shell',
          desc: 'High-quality nutmeg shells, processed with export standards.',
        },
      },
    },
    marine: {
      title: 'Marine Products',
      description: 'Indonesian marine wealth processed naturally and hygienically.',
      products: {
        driedSeaworm: {
          name: 'Dried Seaworm',
          desc: 'Selected seaworms dried to perfection.',
        },
        driedFishMaw: {
          name: 'Dried Fish Maw',
          desc: 'Premium fish maw with high nutritional value.',
        },
      },
    },
    contact: {
      title: 'Contact Us',
      address: 'Our Address',
      location: 'Mutiara Margomulyo Indah Blok K, 21, Manukan Wetan, Tandes, Surabaya City, East Java, Indonesia',
    },
    stats: {
      experience: '10+',
      countries: '15+',
      volume: '1000+',
      experienceLabel: 'Years Experience',
      countriesLabel: 'Export Countries',
      volumeLabel: 'Tons Shipped',
    },
    process: {
      title: 'Our Quality Process',
      steps: {
        sourcing: { title: 'Sourcing', desc: 'Selecting the best raw materials directly from local farmers and fishermen.' },
        drying: { title: 'Drying', desc: 'Natural drying process to preserve nutrients and quality.' },
        sorting: { title: 'Sorting', desc: 'Strict selection to ensure only the best products are shipped.' },
        packaging: { title: 'Packaging', desc: 'International packaging standards for safety during transit.' },
      },
    },
  },
  zh: {
    nav: {
      home: '首页',
      about: '公司简介',
      agricultural: '农产品',
      marine: '海产品',
      contact: '联系我们',
    },
    hero: {
      title: 'CV Yelin Shan Hang',
      subtitle: '来自印度尼西亚值得信赖的农产品和海产品出口商',
    },
    about: {
      title: '公司简介',
      vision: {
        title: '愿景',
        content: '成为领先的出口合作伙伴，通过质量和信任将印度尼西亚的自然财富与全球市场联系起来。',
      },
      mission: {
        title: '使命',
        content: '以国际标准提供最好的农产品和海产品，增强当地资源，并通过卓越的服务确保客户满意。',
      },
      values: {
        title: '我们的价值观',
        items: {
          quality: '优质品质',
          integrity: '商业诚信',
          sustainability: '自然可持续性',
        },
      },
    },
    agricultural: {
      title: '农产品',
      description: '我们为国际市场提供高质量的农产品。',
      products: {
        nutmegShell: {
          name: '肉豆蔻壳',
          desc: '优质肉豆蔻壳，按出口标准加工。',
        },
      },
    },
    marine: {
      title: '海产品',
      description: '以天然、卫生方式加工的印度尼西亚海洋财富。',
      products: {
        driedSeaworm: {
          name: '干海蚯蚓',
          desc: '经过完美干燥的精选海蚯蚓。',
        },
        driedFishMaw: {
          name: '干鱼鳔',
          desc: '具有高营养价值的优质鱼鳔。',
        },
      },
    },
    contact: {
      title: '联系我们',
      address: '我们的地址',
      location: 'Mutiara Margomulyo Indah Blok K, 21, Manukan Wetan, Tandes, 泗水市, 东爪哇省, 印度尼西亚',
    },
    stats: {
      experience: '10+',
      countries: '15+',
      volume: '1000+',
      experienceLabel: '年经验',
      countriesLabel: '出口国家',
      volumeLabel: '已运送吨数',
    },
    process: {
      title: '我们的质量流程',
      steps: {
        sourcing: { title: '采购', desc: '直接从当地农民和渔民手中挑选最好的原材料。' },
        drying: { title: '干燥', desc: '天然干燥过程，保留营养和品质。' },
        sorting: { title: '分拣', desc: '严格筛选，确保只运送最好的产品。' },
        packaging: { title: '包装', desc: '国际包装标准，确保运输安全。' },
      },
    },
  },
};
