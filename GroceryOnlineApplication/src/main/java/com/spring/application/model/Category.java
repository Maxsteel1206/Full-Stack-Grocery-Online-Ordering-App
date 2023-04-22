package com.spring.application.model;

import java.util.HashMap;
import java.util.Map;

public enum Category {
	FRUITS(0), CANNED_GOODS(1), VEGETABLES(2), FROZEN_FOODS(3), DAIRYP_RODUCTS(4), BABY_ITEMS(5), CONDIMENTS_SPICES(6),
	SAUCES_OILS(7), SNAKES_CHIPS(8), BREAD_BAKERY(9), BEVERAGES(10), PASTA_RICE(11), CEREAL(12), BAKING(13),
	PERSONAL_CARE(14), PAPER_WARP(15), HOUSEHOLD_SUPPLIRS(16), OTHER_ITEMS(17);

	private int value;
	private static Map map = new HashMap<>();

	private Category(int value) 
	{
		this.value = value;
	}

	static 
	{
		for (Category category : Category.values()) 
		{
			map.put(category.value, category);
		}
	}

	public static Category valueOf(int category) 
	{
		return (Category) map.get(category);
	}

	public int gerValue() 
	{
		return value;
	}

}
