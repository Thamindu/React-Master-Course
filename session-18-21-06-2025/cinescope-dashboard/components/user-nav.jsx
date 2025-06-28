"use client"
import React from 'react';
import { LogOut, User, Settings } from 'lucide-react';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuGroup,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu";
import { Button, } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { signOut } from '@/lib/auth-client';
import { redirect } from 'next/navigation';
import { toast } from "sonner"

export default function UserNav() {
    const handleLogout = async () => {
        await signOut({fetchOptions : {
            onSuccess : () => {
              toast.success("Logged out successfully", {
                description: "Come back soon!",
                duration:2000
              });
              redirect('/login')
            }
        }})
    }
  return (
    <DropdownMenu>
    <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-10 w-10 rounded-full">
            <Avatar className="h-10 w-10 border-r2 border-primary-400">
                <AvatarImage src="/images/avatar.png" alt="User"></AvatarImage>
                <AvatarFallback className="bg-primary text-white">TJ</AvatarFallback>
            </Avatar>
        </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent className="w-56" align="end" forceMount>
      <DropdownMenuLabel>
        <div className='flex flex-col space-y-1'>
            <p className='font-medium leading-none text-sm text-primary'>Admin User</p>
            <p className='font-medium leading-none text-xs text-gray-400'>myadd@gmail.com</p>
        </div>
        
      </DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuGroup>
        <DropdownMenuItem><User className='mr-2 h-4 w-4 text-primary'/><span>Profile</span></DropdownMenuItem>
        <DropdownMenuItem><Settings className='mr-2 h-4 w-4 text-primary'/><span>Settings</span></DropdownMenuItem>
      </DropdownMenuGroup>
      <DropdownMenuSeparator />
      <DropdownMenuItem onClick={handleLogout}><LogOut className='mr-2 h-4 w-4 text-primary'/><span>Logout</span></DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
  )
}
