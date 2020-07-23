package com.example.AngularApp.DAO;

import java.io.File;
import java.util.List;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;

import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.example.AngularApp.entity.AddressEntity;
import com.example.AngularApp.entity.InfoEntity;
import com.example.AngularApp.entity.UsersEntity;

@Repository
public class InfoDAOImpl implements InfoDAO {
	
	@Autowired
	private EntityManager entityManager;
	 

	/**
	File f = new File("src/main/java/hibernate.cfg.xml");
	SessionFactory sessionFactory = new Configuration()
			.configure(f)
			.addAnnotatedClass(InfoEntity.class)
			.addAnnotatedClass(AddressEntity.class)
			.buildSessionFactory();**/

	@Override
	@Transactional
	public List<InfoEntity> getInfo() {

		/**
		Session currentSession = sessionFactory.getCurrentSession();
		currentSession.beginTransaction();
		

		Query<InfoEntity> query = currentSession.createQuery("from InfoEntity", InfoEntity.class);

		List<InfoEntity> list = query.getResultList();
		**/
		
        List<InfoEntity> list = entityManager.createQuery("from InfoEntity").getResultList();
		
		return list;
	
	}

	@Override
	@Transactional
	public void createInfo(InfoEntity i) {
		
		/**
		Session currentSession = sessionFactory.getCurrentSession();
		currentSession.beginTransaction();
		
		currentSession.saveOrUpdate(i);**/
		
		entityManager.persist(i);;
		
	}

	@Override
	@Transactional
	public void deleteInfo(int id) {
		/**
		// TODO Auto-generated method stub
		Session currentSession = sessionFactory.getCurrentSession();
		currentSession.beginTransaction();
		
		Query<InfoEntity> query = currentSession.createQuery("delete from InfoEntity where id = :id");
		query.setParameter("id", new Integer(id));
		int result = query.executeUpdate();
		**/
		
		InfoEntity s = entityManager.find(InfoEntity.class,id);
        entityManager.remove(s);
	
	}

	@Override
	@Transactional
	public void editInfo(InfoEntity i) {

		/**
		Session currentSession = sessionFactory.getCurrentSession();
		currentSession.beginTransaction();
		

		InfoEntity info = currentSession.load(InfoEntity.class, i.getId());
		
		AddressEntity a =  currentSession.load(AddressEntity.class, i.getAddressEntity().getId());
		
		a.setHouse(i.getAddressEntity().getHouse());
		a.setStreet(i.getAddressEntity().getStreet());
		a.setZip(i.getAddressEntity().getZip());
		info.setFirst(i.getFirst());
		info.setLast(i.getLast());
		info.setGender(i.getGender());
		currentSession.update(a);
		currentSession.update(info);
		
		**/
		
		entityManager.merge(i);
	
	}

	@Override
	@Transactional
	public InfoEntity getsingleInfo(int id) {
		
		/**
		Session currentSession = sessionFactory.getCurrentSession();
		currentSession.beginTransaction();
		

		Query<InfoEntity> query = currentSession.createQuery("from InfoEntity where id = :id", InfoEntity.class);
		query.setParameter("id", new Integer(id));
		InfoEntity information = query.uniqueResult();
		**/
	
		return entityManager.find(InfoEntity.class,id);

	}

	@Override
	@Transactional
	public UsersEntity getsingleUser(UsersEntity u) {
		/**
		
		Session currentSession = sessionFactory.getCurrentSession();
		currentSession.beginTransaction();

		Query<UsersEntity> query = currentSession.createQuery("from UsersEntity where name = :name", UsersEntity.class);
		
		query.setParameter("name", u.getName());
		UsersEntity user = query.uniqueResult();
		

		if(user==null)
		{
			user= new UsersEntity("", "");
			
		}
		return user;
		**/
	
		int id= u.getId();
		Query query= (Query) entityManager.createQuery("from UsersEntity where name = :name", UsersEntity.class);
		query.setParameter("name", u.getName());
		UsersEntity user = (UsersEntity) query.uniqueResult();
		

		if(user==null)
		{
			user= new UsersEntity("", "");
			
		}
		return user;
		
	}

	@Override
	@Transactional
	public void createUser(UsersEntity u) {
		
		/**

		Session currentSession = sessionFactory.getCurrentSession();
		currentSession.beginTransaction();
		
		currentSession.save(u);
		**/
		
		entityManager.persist(u);
	
	}

}
