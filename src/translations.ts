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
      items: string[];
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
      nutmegNoShell: {
        name: string;
        desc: string;
      };
      longNutmeg: {
        name: string;
        desc: string;
      };
      cloves: {
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
    form: {
      firstName: string;
      lastName: string;
      email: string;
      message: string;
      submit: string;
      submitting: string;
      success: string;
      error: string;
    };
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
        content: 'Menghasilkan produk perikanan bermutu tinggi dan aman dikonsumsi serta bernilai tinggi sehingga mampu bersaing di pasar domestik maupun internasional',
      },
      mission: {
        title: 'Misi',
        items: [
          'Menerapkan sistem jaminan mutu dan keamanan pangan secara konsisten dan berkelanjutan sejak penerimaan bahan baku sampai dengan produksi akhir',
          'Menggunakan sumber daya manusia yang kompeten',
          'Menyediakan sarana dan prasarana yang memadai sesuai dengan konsepsi HACCP',
          'Mengutamakan kepuasan pelanggan',
        ],
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
          name: 'Pala dengan Cangkang (Nutmeg with Shell)',
          desc: 'Pala dengan cangkang berkualitas tinggi, diproses dengan standar ekspor.',
        },
        nutmegNoShell: {
          name: 'Pala Tanpa Cangkang (Nutmeg No Shell)',
          desc: 'Pala kupas berkualitas tinggi, siap untuk diproses lebih lanjut.',
        },
        longNutmeg: {
          name: 'Pala Lonjong (Long Nutmeg)',
          desc: 'Varian pala lonjong dengan aroma dan kualitas yang khas.',
        },
        cloves: {
          name: 'Cengkeh (Cloves)',
          desc: 'Cengkeh kering berkualitas premium dari petani lokal pilihan.',
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
          name: 'Perut Ikan Kering (Dried Fish Maw)',
          desc: 'Perut ikan premium dengan nilai nutrisi tinggi.',
        },
      },
    },
    contact: {
      title: 'Hubungi Kami',
      address: 'Alamat Kami',
      location: 'Mutiara Margomulyo Indah, Manukan Wetan, Tandes, Kota Surabaya, Jawa Timur, Indonesia',
      form: {
        firstName: 'Nama Depan',
        lastName: 'Nama Belakang',
        email: 'Email',
        message: 'Pesan',
        submit: 'Kirim Pesan',
        submitting: 'Mengirim...',
        success: 'Pesan berhasil dikirim!',
        error: 'Gagal mengirim pesan. Silakan coba lagi.',
      },
    },
    stats: {
      experience: '8+',
      countries: '2+',
      volume: '1000+',
      experienceLabel: 'Tahun Pengalaman',
      countriesLabel: 'Negara Tujuan',
      volumeLabel: 'Ton Terkirim',
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
        content: 'To produce high-quality, safe-to-consume, and high-value fishery products that are competitive in both domestic and international markets',
      },
      mission: {
        title: 'Mission',
        items: [
          'Consistently and sustainably implement quality assurance and food safety systems from raw material reception to final production',
          'Employ competent human resources',
          'Provide adequate facilities and infrastructure in accordance with HACCP concepts',
          'Prioritize customer satisfaction',
        ],
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
        nutmegNoShell: {
          name: 'Nutmeg No Shell',
          desc: 'High-quality peeled nutmeg, ready for further processing.',
        },
        longNutmeg: {
          name: 'Long Nutmeg',
          desc: 'Long nutmeg variant with distinctive aroma and quality.',
        },
        cloves: {
          name: 'Cloves',
          desc: 'Premium quality dried cloves from selected local farmers.',
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
      location: 'Mutiara Margomulyo Indah, Manukan Wetan, Tandes, Surabaya City, East Java, Indonesia',
      form: {
        firstName: 'First Name',
        lastName: 'Last Name',
        email: 'Email',
        message: 'Message',
        submit: 'Send Message',
        submitting: 'Sending...',
        success: 'Message sent successfully!',
        error: 'Failed to send message. Please try again.',
      },
    },
    stats: {
      experience: '8+',
      countries: '2+',
      volume: '1000+',
      experienceLabel: 'Years Experience',
      countriesLabel: 'Destination Countries',
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
        content: '生产高质量、安全食用且高价值的水产品，使其在国内外市场具有竞争力',
      },
      mission: {
        title: '使命',
        items: [
          '从原材料接收到最终生产，始终如一且可持续地实施质量保证和食品安全体系',
          '聘用称职的人力资源',
          '根据 HACCP 概念提供充足的设施和基础设施',
          '优先考虑客户满意度',
        ],
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
        nutmegNoShell: {
          name: '去壳肉豆蔻',
          desc: '高品质去壳肉豆蔻，可供进一步加工。',
        },
        longNutmeg: {
          name: '长肉豆蔻',
          desc: '具有独特香气和品质的长肉豆蔻品种。',
        },
        cloves: {
          name: '丁香',
          desc: '来自精选当地农民的优质干丁香。',
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
      location: 'Mutiara Margomulyo Indah, Manukan Wetan, Tandes, 泗水市, 东爪哇省, 印度尼西亚',
      form: {
        firstName: '名字',
        lastName: '姓氏',
        email: '电子邮件',
        message: '信息',
        submit: '发送信息',
        submitting: '发送中...',
        success: '信息发送成功！',
        error: '发送失败。请重试。',
      },
    },
    stats: {
      experience: '8+',
      countries: '2+',
      volume: '1000+',
      experienceLabel: '年经验',
      countriesLabel: '目标国家',
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
