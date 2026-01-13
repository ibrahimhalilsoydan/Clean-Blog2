import mongoose from 'mongoose';
import { Schema } from 'mongoose';

const main = async () => {
  try {
    // 1. BAĞLANTI
    await mongoose.connect('mongodb://127.0.0.1:27017/cleanblog-test');
    console.log('✅ Bağlantı OK');
    // 2. ŞEMA ve MODEL OLUŞTURMA
    const PostSchema = new Schema({
      title: String,
      detail: String,
      dateCreated: {
        type: Date,
        default: Date.now,
      },
    });
    // model tanımı
    const Post = mongoose.model('Post', PostSchema);
    // 3. VERİ EKLEME

     await Post.create({
      title: 'İlk Blog Yazısı',
      detail: 'Bu, temiz blog uygulaması için ilk blog yazısıdır.',
    });

    console.log('✅ Yeni Post Oluşturuldu:');

// 4. VERİLERİ OKUMA
    const allPosts = await Post.find({});
        console.log('📂 Veritabanındaki Tüm Fotolar:', allPosts);
        


  } catch (error) {
    console.error('❌ HATA:', error);
  } finally {
    //await mongoose.disconnect();
    //console.log('\n🔌 Bağlantı kapatıldı.');
  }
};

main();
